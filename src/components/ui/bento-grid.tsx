import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  children,
  titleClassName,
  descriptionClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  titleClassName?: string;
  descriptionClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-6 md:p-8 dark:bg-white/5 bg-white/50 border border-neutral-200 dark:border-white/10 backdrop-blur-md flex flex-col space-y-4 overflow-hidden relative",
        className
      )}
    >
      {header}
      {children}
      <div className="group-hover/bento:translate-x-2 transition duration-200 relative z-10 mt-auto">
        {icon}
        {title && (
          <div className={cn("font-sans font-bold text-neutral-800 dark:text-neutral-200 mb-2 mt-2 text-xl", titleClassName)}>
            {title}
          </div>
        )}
        {description && (
          <div className={cn("font-sans font-medium text-neutral-500 dark:text-neutral-400 text-base", descriptionClassName)}>
            {description}
          </div>
        )}
      </div>
    </div>
  );
};
