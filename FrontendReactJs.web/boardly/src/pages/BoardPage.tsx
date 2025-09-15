import { KanbanBoard } from "../components/KanbanBoard";

export function BoardPage() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">My Board</h2>
      <KanbanBoard />
    </div>
  );
}
