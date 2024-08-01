import { DNDType } from "../components/DragDropWrapper";

export const container: DNDType[] = [
  {
    id: "container-1",
    title: "To do",
    items: [
      {
        id: "item-1",
        title: "Implement User Authentication",
        description:
          "Develop and integrate user authentication using email and password.",
        status: "pending",
        priority: "urgent",
        deadline: new Date(),
      },
    ],
  },
  {
    id: "container-2",
    title: "In Progress",
    items: [
      {
        id: "item-2",
        title: "Design Home Page UI",
        description:
          "Develop and integrate user authentication using email and password.",
        status: "progress",
        priority: "medium",
        deadline: new Date(),
      },
      {
        id: "item-3",
        title: "Conduct User Feedback Survey",
        description:
          "Collect and analyze user feedback to improve app features.",
        status: "progress",
        priority: "low",
        deadline: new Date(),
      },
    ],
  },
  {
    id: "container-3",
    title: "Under Review",
    items: [
      {
        id: "item-4",
        title: "Integrate Cloud Storage",
        description:
          "Enable cloud storage for note backup and synchronization.",
        status: "review",
        priority: "urgent",
        deadline: new Date(),
      },
    ],
  },
  {
    id: "container-4",
    title: "Finished",
    items: [
      {
        id: "item-5",
        title: "Test Cross-browser Compatibility",
        description:
          "Ensure the app works seamlessly across different web browsers.",
        status: "finished",
        priority: "medium",
        deadline: new Date(),
      },
    ],
  },
];
