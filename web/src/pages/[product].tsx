import { useEffect, useState } from "react";

import axios from "axios";
import { useRouter } from "next/router";

export default function Product() {

  const { query } = useRouter();

  return <h1>{JSON.stringify(query.slug)}</h1>;
}
