// Example: button group
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface ExampleButtonGroupProps {
  isDarkMode: boolean;
  isVertical: boolean;
}

const ExampleButtonGroup = ({
  isDarkMode,
  isVertical,
}: ExampleButtonGroupProps) => {
  return (
    <div
      className={cn(
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black",
        "p-4 rounded-md shadow-md",
        isVertical ? "flex flex-col space-y-2" : "flex flex-row space-x-2"
      )}
    >
      <Button variant="destructive">Strong Reject</Button>
      <Button variant="outline">Reject</Button>
      <Button variant="ghost">Neutral</Button>
      <Button variant="outline">Accept</Button>
      <Button variant="default">Strong Accept</Button>
    </div>
  );
};

export default ExampleButtonGroup;
