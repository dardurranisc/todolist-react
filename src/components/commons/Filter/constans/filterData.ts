type filterDataProps = {
  id: "all" | "active" | "completed";
  href: string;
  text: string;
};

export const filterData: filterDataProps[] = [
  { id: "all", href: "#/", text: "All" },
  { id: "active", href: "#/active", text: "Active" },
  { id: "completed", href: "#/completed", text: "Completed" },
];
