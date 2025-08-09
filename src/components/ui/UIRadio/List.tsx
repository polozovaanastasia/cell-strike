type ItemType = {
    id: number;
    name: string;
};

type AnimalType = ItemType & {
    type: "dog" | "cat";
};

type PersonType = ItemType;

export const animals: AnimalType[] = [
    { id: 1, name: "Листик", type: "dog" },
    { id: 2, name: "Бусинка", type: "cat" },
];

export const people = [
    { id: 1, name: "Том" },
    { id: 2, name: "Лора" },
];

type ListPropsType<Type> = {
    items: Type[];
    render: (items: Type) => React.ReactNode;
};

export const List = <Type extends ItemType = ItemType>({
    items,
    render,
}: ListPropsType<Type>) => {
    return (
        <ul>
            {items.map((item) => (
                <li>{render(item)}</li>
            ))}
        </ul>
    );
};
