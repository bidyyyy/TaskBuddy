interface Board{
    columns : Map<TypedColumn, Column>
}
type TypedColumn = "todo" | "inprogress" |"done"

interface Column{
    id: TypeColumn,
    todos: Todo[];
}

interface Todo{
    $id: string,
    $createdAt: string,
    title: string,
    image?: string;
}

interface Image {
    bucketId: string,
    fileId: string;
}