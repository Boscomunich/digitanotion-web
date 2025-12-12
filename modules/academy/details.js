import { HiAcademicCap } from "react-icons/hi2";
import { FaHandsHelping, FaUserGraduate } from "react-icons/fa";
import { MdWork } from "react-icons/md";

function DetailCard({ header, text, Icon }) {
  return (
    <div className="shade flex flex-col border border-gray-300 rounded-xl p-6 w-full sm:w-[47%] lg:w-[30%] bg-background hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4 gap-3">
        <Icon className="text-2xl text-brand" />
        <h3 className="text-lg font-bold text-brand">{header}</h3>
      </div>
      <div className="flex-1">
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  );
}

export function Details() {
  const notes = [
    {
      id: 1,
      title: "No prior experience is required",
      points:
        "Our courses are beginner-friendly and designed to help absolute starters gain confidence.",
      icon: FaUserGraduate,
    },
    {
      id: 2,
      title: "Hands-on learning",
      points:
        "Each learner practices with real tools, real exercises, and guided projects — not just theory.",
      icon: FaHandsHelping,
    },
    {
      id: 3,
      title: "Career-ready foundation",
      points:
        "Every course equips you with practical digital skills that prepare you for future training, opportunities, and tech roles.",
      icon: MdWork,
    },
  ];

  return (
    <div className="flex flex-col gap-6 py-10 px-8 lg:px-32 box-border bg-bg-secondary">
      <div>
        <h1 className="text-brand text-3xl font-bold">Details to know</h1>
      </div>
      <div className="flex flex-wrap gap-6 justify-between w-full">
        {notes.map((note) => (
          <DetailCard
            key={note.id}
            header={note.title}
            text={note.points}
            Icon={note.icon}
          />
        ))}
      </div>
    </div>
  );
}
