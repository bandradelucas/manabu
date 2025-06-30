import {
  DatabaseObjectResponse,
  RichTextItemResponse,
  type BlockObjectResponse,
} from "@notionhq/client";

export type NotionBlockWithChildren = BlockObjectResponse & {
  children?: NotionBlockWithChildren[];
};

export type Post = DatabaseObjectResponse & {
  properties: {
    Post: {
      id: string;
      type: "relation";
      relation: Array<{
        id: string;
      }>;
    };
    Language: {
      id: string;
      type: "relation";
      relation: Array<{
        id: string;
      }>;
    };
    Slug: {
      id: string;
      type: "rich_text";
      rich_text: Array<RichTextItemResponse>;
    };
    "Last edited time": {
      id: string;
      type: "last_edited_time";
      last_edited_time: string;
    };
    "Language Code": {
      id: string;
      type: "rollup";
      rollup: {
        type: "array";
        array: Array<{
          type: "rich_text";
          rich_text: Array<RichTextItemResponse>;
        }>;
        function: "show_original";
      };
    };
    "Publish Date": {
      id: string;
      type: "rollup";
      rollup: {
        type: "array";
        array: Array<{
          type: "date";
          date: {
            start: string;
            end: string | null;
            time_zone: string | null;
          };
        }>;
        function: "show_original";
      };
    };
    "Created time": {
      id: string;
      type: "created_time";
      created_time: string;
    };
    "Is Published": {
      id: string;
      type: "rollup";
      rollup: {
        type: "array";
        array: Array<{
          type: "formula";
          formula: {
            type: "boolean";
            boolean: boolean | null;
          };
          function: "show_original";
        }>;
      };
    };
    Title: {
      id: string;
      type: "title";
      title: Array<RichTextItemResponse>;
    };
  };
};
