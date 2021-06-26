const ColoredLine = ({ color }) => (
    <hr
        style={{
            width: '65vw',
            color: color,
            backgroundColor: color,
            height: 1
        }}
    />
);

export default ColoredLine;