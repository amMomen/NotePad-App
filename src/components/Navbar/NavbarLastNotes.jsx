import { useState } from "react";
import NavBarItem from "./NavBarItem";
import DocIcon from "@/components/UI/Icons/Doc";

const lastNotes = [
  {
    id: 1,
    name: "هدفم برای سال جدید",
  },
  {
    id: 2,
    name: "کتاب‌هایی که می‌خوام بخونم",
  },
  {
    id: 3,
    name: "خلاصه جلسه ۱۲ صدکدرز",
  },
];
//////////////////////////////aaaa/////////////////////

function LastNotes({colorIcons}) {
  const [Selected, setSelected] = useState(null);
  return (
    <section className="last-notes-container">
      <h2>آخرین یادداشت‌ها</h2>

      <div className="last-notes">
        {lastNotes.map((item) => (
          <NavBarItem
            key={item.name}
            text={item.name}
            icon={(<DocIcon fill={colorIcons ? "white" : "black"}/>)}
            selected={item.id === Selected}
            onClick={() => setSelected(item.id)}
          />
        ))}
      </div>
    </section>
  );
}

export default LastNotes;
