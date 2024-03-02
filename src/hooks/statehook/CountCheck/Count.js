import React, { useState } from "react";

export default function Count({ count }) {
  const [prevCount, setPrevCount] = useState(count);
  const [trend, setTrend] = useState(null);
  if (prevCount !== count) {
    setPrevCount(count);
    setTrend(count > prevCount ? "Increasing" : "Decreasing");
  }
  return (
    <div>
      Count - {count} Trend - {trend}
    </div>
  );
}
