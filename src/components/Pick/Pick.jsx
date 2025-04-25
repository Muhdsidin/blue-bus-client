import { useId } from "react";

function Pick({ setFrom , setWhere }) {
  const id = useId();
  return (
    <div className=" flex min-w-[100px] rounded-lg border border-input bg-background shadow-sm shadow-black/5 transition-shadow focus-within:border-ring focus-within:outline-none focus-within:ring-[3px] focus-within:ring-ring/20 has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50 [&:has(input:is(:disabled))_*]:pointer-events-none">
      <div className="w-[200px]">
      <label htmlFor={id} className=" px-3 pt-2 text-xs font-medium text-foreground">
        Pick From ?
      </label>
      <input
        id={id}
        className="flex h-10  bg-transparent px-3 pb-2 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none"
        placeholder="From"

        onChange={(e) => setFrom(e.target.value)}
        type="text"
      />
      </div>

      <div  className="w-[200px]">
      <label htmlFor={id} className="block px-3 pt-2 text-xs font-medium text-foreground">
        Where to  ?
      </label>
      <input
        onChange={(e) => setWhere(e.target.value)}
        id={id}
        className="flex h-10  bg-transparent px-3 pb-2 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none"
        placeholder="where to "
        type="text"
      />
      </div>
    </div>
  );
}

export { Pick };
