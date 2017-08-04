import React from "react";

const Foo = () =>
  <div>
    {true
      ? null
      : <a>
          {"foo"}
        </a>}
  </div>;
