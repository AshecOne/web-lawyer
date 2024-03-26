import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const Hero = dynamic(() => import("@/views/Hero"), { suspense: true });
const Practice = dynamic(() => import("@/views/Practice"), { suspense: true });
const Stats = dynamic(() => import("@/views/Stats"), { suspense: true });
const Attorneys = dynamic(() => import("@/views/Attorneys"), {
  suspense: true,
});
const Overview = dynamic(() => import("@/views/Overview"), { suspense: true });
const Testimoni = dynamic(() => import("@/views/Testimoni"), {
  suspense: true,
});
const Consultation = dynamic(() => import("@/views/Consultation"), {
  suspense: true,
});
const Map = dynamic(() => import("@/views/Map"), { suspense: true });

export default function Home() {
  return (
    <div>
      <Suspense fallback={<div></div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <Practice />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <Stats />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <Attorneys />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <Overview />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <Testimoni />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <Consultation />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <Map />
      </Suspense>
    </div>
  );
}
