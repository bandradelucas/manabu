"use client";

import { Table } from "@mantine/core";
import {
  type RichTextItemResponse,
  type TableBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

import { type NotionBlockWithChildren } from "@/types/notion";

import { NotionRenderText } from "./NotionRenderText";

type NotionBlockTableProps = {
  block: TableBlockWithChildrenObjectResponse;
};

type TableBlockWithChildrenObjectResponse = TableBlockObjectResponse & {
  children?: NotionBlockWithChildren[];
};

export function NotionBlockTable({ block }: NotionBlockTableProps) {
  if (block.type !== "table" || !block.children) return null;

  const { has_column_header, has_row_header } = block.table;
  const rows = block.children.filter((child) => child.type === "table_row");

  if (rows.length === 0) return null;

  const renderCellContent = (cell: RichTextItemResponse[]) =>
    cell.map((text, i) => <NotionRenderText key={i} richText={[text]} />);

  return (
    <Table
      withTableBorder
      withColumnBorders
      striped
      highlightOnHover
      captionSide="bottom"
    >
      {has_column_header && (
        <Table.Thead>
          <Table.Tr>
            {rows[0].table_row.cells.map((cell, colIndex) => (
              <Table.Th key={`header-${colIndex}`}>
                {renderCellContent(cell)}
              </Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
      )}
      <Table.Tbody>
        {rows.slice(has_column_header ? 1 : 0).map((row, rowIndex) => (
          <Table.Tr key={`row-${row.id}`}>
            {row.table_row.cells.map((cell, colIndex) => {
              const isRowHeader = has_row_header && colIndex === 0;
              return isRowHeader ? (
                <Table.Th key={`cell-${rowIndex}-${colIndex}`} scope="row">
                  {renderCellContent(cell)}
                </Table.Th>
              ) : (
                <Table.Td key={`cell-${rowIndex}-${colIndex}`}>
                  {renderCellContent(cell)}
                </Table.Td>
              );
            })}
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}
