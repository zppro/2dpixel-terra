import { useQuery, useConvex } from "convex/react";
import { api } from "../apis/api2";
import { useEffect, useState } from 'react';
import type { Genesis } from './type';


export default function GenesisDomain({ notifier }: { notifier: (g: Genesis) => void }) {
  const client = useConvex()
  const [isMessageLoaded, SetIsMessageLoaded] = useState(false)
  const unsub = client.watchQuery(api.messages.list).onUpdate(() => {
    SetIsMessageLoaded(true)
  })
  const messages = useQuery(api.messages.list);
  console.log('messages=>', messages)
  useEffect(() => {
    notifier({
      messages
    })
    return unsub
  }, [isMessageLoaded]);

  return (
    <>{messages?.length}</>
  )
}