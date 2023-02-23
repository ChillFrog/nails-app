import react, { useState } from "react";
import Image from "next/image";
import { categories } from "../utils/nail-styles";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Main() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [colorOpen, setColorOpen] = useState(false);

  return (
    <div>
      <div className="hidden">Sidebar</div>
    </div>
  );
}
