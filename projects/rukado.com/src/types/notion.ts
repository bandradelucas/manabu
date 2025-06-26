export type NotionBlock = {
  id: string;
  has_children?: boolean;
  children?: NotionBlock[];
} & (
  | NotionParagraph
  | NotionToDo
  | NotionListItem
  | NotionDivider
  | NotionTable
  | NotionTableRow
);

export type NotionText = {
  type: "text";
  text: {
    content: string;
    link: { url: string } | null;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href: string | null;
};

export type NotionTableRow = {
  type: "table_row";
  table_row: {
    cells: NotionText[][];
  };
};

export type NotionTable = {
  type: "table";
  table: {
    has_column_header: boolean;
    has_row_header: boolean;
    table_width: number;
  };
  has_children: true;
  children?: NotionBlock[];
};

export type NotionParagraph = {
  type: "paragraph";
  paragraph: {
    rich_text: NotionText[];
    color: string;
  };
};

export type NotionToDo = {
  type: "to_do";
  to_do: {
    rich_text: NotionText[];
    checked: boolean;
    color: string;
  };
  has_children?: boolean;
  children?: NotionBlock[];
};

export type NotionListItem = {
  type: "bulleted_list_item" | "numbered_list_item";
  bulleted_list_item?: {
    rich_text: NotionText[];
    color: string;
  };
  numbered_list_item?: {
    rich_text: NotionText[];
    color: string;
  };
  has_children?: boolean;
  children?: NotionBlock[];
};

export type NotionDivider = {
  type: "divider";
  divider: {};
};

export type NotionHeading = {
  type: "heading_1" | "heading_2" | "heading_3";
  heading_1?: {
    rich_text: NotionText[];
    is_toggleable: boolean;
    color: string;
  };
  heading_2?: {
    rich_text: NotionText[];
    is_toggleable: boolean;
    color: string;
  };
  heading_3?: {
    rich_text: NotionText[];
    is_toggleable: boolean;
    color: string;
  };
};
