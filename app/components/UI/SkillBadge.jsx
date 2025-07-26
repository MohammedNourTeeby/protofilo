export default function SkillBadge({ skill }) {
  return (
    <span className="bg-[#7c3aed]/10 text-[#7c3aed] px-4 py-2 rounded-full text-sm font-medium transition hover:bg-[#7c3aed]/20 hover:shadow-sm">
      {skill}
    </span>
  );
}