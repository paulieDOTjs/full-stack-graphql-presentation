import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloProvider as Provider,
} from "@apollo/client";
import { CachePersistor, LocalStorageWrapper } from "apollo3-cache-persist";
import { Maybe } from "@graphql-tools/utils";
import { client as apolloClient } from "./client";
import { cache } from "./cache/cache";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const CACHE_KEY = "APOLLO_CACHE";
const BROADCAST_KEY = "APOLLO_BROADCAST";
const BROADCAST_CLEAR_KEY = "CLEAR_STORAGE";

export const ApolloProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();
  const [persistor, setPersistor] =
    useState<Maybe<CachePersistor<NormalizedCacheObject>>>();

  const shouldRefresh = useRef(false);
  const shouldClear = useRef(false);

  useEffect(() => {
    async function init() {
      try {
        const newPersistor = new CachePersistor({
          cache,
          maxSize: false,
          key: CACHE_KEY,
          storage: new LocalStorageWrapper(window.localStorage),
        });

        await newPersistor.restore();
        setPersistor(newPersistor);
      } catch (error) {
        console.error({ error });
      } finally {
        setClient(apolloClient);
      }
    }

    init();
  }, []);

  const broadcast = useMemo(() => new BroadcastChannel(BROADCAST_KEY), []);

  const clearAndNotify = useCallback(async () => {
    broadcast.postMessage(BROADCAST_CLEAR_KEY);
    persistor?.purge();
  }, [broadcast, persistor]);

  useEffect(() => {
    broadcast.onmessage = (ev) => {
      if (ev.data === BROADCAST_CLEAR_KEY) {
        shouldClear.current = true;
      }
    };
  }, [broadcast, client, persistor]);

  useEffect(() => {
    if (!client) return;
    client.onClearStore(clearAndNotify);
    client.onResetStore(clearAndNotify);
  }, [clearAndNotify, client]);

  const handleRefocus = useCallback(() => {
    if (shouldRefresh.current) {
      let crossTabCache: NormalizedCacheObject = {};
      let localCache: NormalizedCacheObject = {};
      try {
        const unparsed = window.localStorage.getItem(CACHE_KEY);
        if (unparsed) {
          crossTabCache = JSON.parse(unparsed);
        }
      } catch (err) {
        return;
      }
      if (!shouldClear.current) {
        localCache = cache.extract();
      }

      shouldClear.current = false;
      shouldRefresh.current = false;
      cache.restore({ ...localCache, ...crossTabCache });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("focus", handleRefocus);
    return () => {
      window.removeEventListener("focus", handleRefocus);
    };
  }, [handleRefocus]);

  const handleCacheUpdated = useCallback(
    (event: StorageEvent | CustomEvent) => {
      if (
        (event as StorageEvent)?.key &&
        (event as StorageEvent).key === CACHE_KEY
      ) {
        shouldRefresh.current = true;
      }
    },
    []
  );

  useEffect(() => {
    window.addEventListener("storage", handleCacheUpdated);
    return () => {
      window.removeEventListener("storage", handleCacheUpdated);
    };
  }, [handleCacheUpdated]);

  if (!client || persistor === undefined) return null;

  return <Provider client={client}>{children}</Provider>;
};
