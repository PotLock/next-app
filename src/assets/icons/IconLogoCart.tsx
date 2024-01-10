import * as React from "react";

export interface IIconLogoCartProps {}

export default function IconLogoCart(props: IIconLogoCartProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<circle cx="12" cy="12" r="12" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_5687_18029" transform="scale(0.0111111)"/>
</pattern>
<image id="image0_5687_18029" width="90" height="90" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>

    
  );
}
