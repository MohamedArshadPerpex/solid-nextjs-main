import React, { useEffect } from 'react';

const Background = () => {
 

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1984 940" width="1280" height="1280" id="star-svg">
{/* <path transform="translate(1016,133)" d="m0 0h38l304 6 46 1-2 4-180 180-6 9-99 99 2 4 190 190 6 5 6 7 6 5 6 7 6 5 7 8 16 16 7 6-1 5-106 106-7-6-446-446 6-7 7-8 4-6z" fill="#3761A0"/>
<path transform="translate(597,158)" d="m0 0 4 1 156 156 7 8 4 5 7 8 275 275-1 5-8 7-197 197h-51l-110-2-204-4-23-1 2-4 285-285-6-7-186-186-6-8-29-29v-2l-4-2v-2l-4-2-4-5-8-7v-2h-2v-2l-4-2v-4l8-7z" fill="#2FC0EF"/>
<path transform="translate(848,413)" d="m0 0 3 1 7 8 62 62 5 2 125 125-1 5-8 5-5 5h-2v2h-2v2h-2l-2 4h-2l-2 4h-2v2h-2v2h-2v2l-8 7-9 9h-2l-2 4-10 10h-2v2h-2v2h-2v2l-4 4h-2l-2 4h-2l-2 4-29 29h-2l-1 3-5 5-8 6-6 1-5 3-6 8-6 5-1 3h-3v2l-5 3h-2l-2 4-4 5-9 5-8 8h-2l-1-4 2-8 4-5h2v-2h2l2-4h2l2-4h2l2-4 6-7h2l2-4 6-5h2v-2l7-6 3-2 2-5h2l2-13 2-14v-30l1-13 2-9v-83l1-24v-41l-1-4-4-2v-2l-4-2v-2l-4-2v-2l-4-2v-2h-3l-1-4-4-2v-2l-4-2-4-4v-2l-3-1-5-5v-2l-4-2v-2l-4-2v-2l-4-2v-2h-2l-7-8-14-14z" fill="#1FAFE7"/>
<path transform="translate(936,215)" d="m0 0h1l-1 21v26l1 24v90l-1 74-1 14 1 4-4-1-123-123 6-7 7-8 4-6 105-105z" fill="#2D5292"/>
<path transform="translate(1027,285)" d="m0 0 6 1 5 2 1 3-2 6-3 21-4 11-1 8 1 14 3 10v6l2 8v5h3l-1 5h2v9l3 7 2 10 1 6v6l-2 4 1 9-1 4 1 8-1 4 4 2 1 5-2 1v3l-5 1-9-3v-2l-6-2v-2l-4-2-10-9-8-7-5-4-5-6-4-3v-2l-4-2-22-22-17-16-8-8v-6l12-11 21-21 4-5h2v-2h2l2-4 4-5 6-5 5-5 5-4h2l1-3 8-7 10-9z" fill="#5071A7"/>
<path transform="translate(1286,743)" d="m0 0h19l1 9-44 44-7-6-39-39v-3h11v2l6-2 18-1 3-1 16-2z" fill="#2F5493"/>
<path transform="translate(597,160)" d="m0 0 7 2 33 33 1 5h2l2 4-7 4-25-1-33 1h-19l-4 2-4-1 37-37 3-5h2l2-4z" fill="#1FAFE7"/>
<path transform="translate(861,781)" d="m0 0 4 1-2 4-4 4h-2v2l-5 5-4 7-3 5-2 8-1 2h-53l-7-3 3-2 4-2 2-4 14-4 15-4 9-3 11-2 7-5h2l2-4 6-3h4z" fill="#1EAFE7"/>
<path transform="translate(1157,477)" d="m0 0 6 3 146 146 6 5 6 7 6 5 6 7 6 5 7 8 6 6-1 2-4-1-17-17-5-4-7-8-6-6v-2l-4-2v-2l-4-2v-2l-4-2v-2l-4-2v-2l-4-2-13-13-6-5-6-7-6-5-7-8-6-6v-2l-4-2v-2h-2l-5-6v-2h-3l-1-4-4-1-5-5v-2l-4-2v-2l-4-2v-2l-4-2v-2l-4-2v-2l-4-2-7-6-7-8-6-6v-2l-4-2v-2l-3-1-5-6-8-7v-2l-4-2-3-4z" fill="#335896"/>
<path transform="translate(1381,140)" d="m0 0 14 1v2l-2 1 2 2-3 1-1 4-1 2h-2v2l-3 1-2 3-7 3-3 1-1-2-4 5v3l-1-2-6 4h-2l-1-2-5 5h-2l1-6 5-5h2l-1-6 3-1 2-5h2v-2l-2-1 4-1 5 2 2-2v2l4-2 2 1v-4l-2-1v-2z" fill="#2A5091"/>
<path transform="translate(728,539)" d="m0 0v3l-18 18-7 8-30 30-8 7-7 7-5 6-36 36-8 7-6 6-2-1z" fill="#FDFDFD"/>
<path transform="translate(596,671)" d="m0 0v3l-7 8-6 5-7 8-27 27-8 7-11 11-5 6-6 5-7 8h-2l-1 3-7 6-9 9-2-1z" fill="#FDFDFD"/>
<path transform="translate(1211,137)" d="m0 0h42l92 2v1h-124l-10-2z" fill="#5F83B3"/>
<path transform="translate(851,415)" d="m0 0 4 1 68 68-3 1-69-69z" fill="#73D4F3"/>
<path transform="translate(1361,681)" d="m0 0 4 1-1 2h-2v3l-2 1-1 4-6 3-4 1-2-2v-5-3l2-4 3 1 5-1z" fill="#2A5091"/>
<path transform="translate(999,152)" d="m0 0 3 2-5 3-5 6-8 7-4 5-8 7-29 29-2-1z" fill="#305898"/>
<path transform="translate(536,219)" d="m0 0v3l-10 10-5 6-13 13h-2l-1 3-5 4-2-1z" fill="#FDFDFD"/>
<path transform="translate(613,172)" d="m0 0 7 6 17 17-3 1-2-4-4-2v-2l-4-2v-2l-4-2v-2l-4-1v-3l-3-1z" fill="#7BD6F4"/>
<path transform="translate(1011,140)" d="m0 0h3l-2 5-3 1v3l-4 1-1 3-3-3z" fill="#2A5091"/>
<path transform="translate(999,152)" d="m0 0 3 2-5 3-5 6-8 7-5 5v-3z" fill="#2E5696"/>
<path transform="translate(934,468)" d="m0 0 5 1 1 3 4 1v3l4 2-1 4-13-13z" fill="#6F89B5"/>
<path transform="translate(803,368)" d="m0 0 4 2 7 8 5 4 3 4-1 2-5-4-5-6-8-8z" fill="#1EAFE7"/>
<path transform="translate(803,367)" d="m0 0 4 1 13 13-3 1-6-6v-2l-4-2v-2l-4-2z" fill="#76D5F3"/>
<path transform="translate(1354,141)" d="m0 0h19v1l-5 1v2l-4 1-2-3-8-1z" fill="#2A5091"/>
<path transform="translate(1128,417)" d="m0 0 3 1-13 13-1-2 5-6h2v-2h2v-2h2z" fill="#5081B4"/>
<path transform="translate(490,264)" d="m0 0 5 1 2 6-6-2z" fill="#67CBEF"/>
<path transform="translate(1032,564)" d="m0 0 5 2 3 5-1 3-7-7z" fill="#6A85B2"/>
<path transform="translate(1030,592)" d="m0 0 7 6 6 7-4-2-8-7z" fill="#53CAF1"/> */}
    </svg>
  );
};

export default Background;
