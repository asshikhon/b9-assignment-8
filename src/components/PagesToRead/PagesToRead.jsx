/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getStoredBook } from "../../utility/localstorage";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { useLoaderData } from "react-router-dom";

const PagesToRead = () => {
    const books = useLoaderData();
    const [appliedBooks, setAppliedBooks] = useState([]);

    useEffect(() => {
        const storeBookIds = getStoredBook("read");
        if (books.length > 0) {
            const booksApplied = [];
            for (const id of storeBookIds) {
                const book = books.find((book) => book.id === id);
                if (book) {
                    booksApplied.push(book);
                }
            }
            setAppliedBooks(booksApplied);
        }
    }, [books]);

    const data = appliedBooks.map(book => ({
        bookName: book && book.bookName ? book.bookName : '',
        totalPages: book && book.totalPages ? book.totalPages : 0,
    }));

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div className="custom-tooltip">
                    <p>{data.bookName}</p>
                    <p>Total Pages: {data.totalPages}</p>
                </div>
            );
        }

        return null;
    };

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        // eslint-disable-next-line react/prop-types
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className="flex justify-center items-center">
            <BarChart
                width={1300}
                height={600}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};


PagesToRead.propTypes = {
    useLoaderData: PropTypes.func.isRequired
};

export default PagesToRead;
