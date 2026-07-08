"use client";

import { useEffect } from "react";
import { captureAttribution } from "../lib/download-attribution";

export default function AttributionCapture() {
  useEffect(() => {
    captureAttribution();
  }, []);

  return null;
}
