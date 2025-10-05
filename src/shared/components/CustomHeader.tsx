interface Props {
    title: string;
    description?: string;
    nombre?: string;
}

export const CustomHeader = ({title, description, nombre}: Props) => {
    return (
        <div className="content-center">
            <h1>{title}</h1>
            {description && <p>{description}</p>}
            <p>{nombre}</p>
        </div>
    );
};