import { FC } from 'react';

interface HexagonData {
    id: number;
}

const hexagonData: HexagonData[] = [
    { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 },
    { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 },
    { id: 11 }, { id: 12 }, { id: 13 }, { id: 14 }, { id: 15 },
    { id: 16 }, { id: 17 }, { id: 18 }, { id: 19 }, { id: 20 },
    { id: 21 }, { id: 22 }, { id: 23 }, { id: 24 },
];

interface HexagonProps {
    text: string;
}

const Hexagon: FC<HexagonProps> = () => {
    const containerStyle: React.CSSProperties = {
        width: '125px',
        height: '125px',
        position: 'relative',
        perspective: '1000px',
        overflow: "hidden",
        flexShrink: 0,
    };

    const flipperStyle: React.CSSProperties = {
        width: '100%',
        height: '100%',
        transition: 'transform 0.6s',
        transformStyle: 'preserve-3d',
    };

    const faceStyle: React.CSSProperties = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div style={containerStyle}>
            <div style={flipperStyle}>
                <div style={faceStyle}>
                    <svg className="w-full h-full" viewBox="0 0 100 115" preserveAspectRatio="none">
                        <polygon
                            points="50 1, 95 29, 95 86, 50 114, 5 86, 5 29"
                            fill="transparent"
                            stroke="#f0f3f4"
                            strokeWidth="0.5"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}

const BgHexagonBottom: FC = () => {
    const rows = 3;
    const itemsPerRow = [4, 7, 12];

    return (
        <div className="overflow-hidden">
            <div className="hidden md:block absolute bottom-0 w-full">
                {Array.from({ length: rows }).map((_, rowIndex) => (
                    <div
                        key={rowIndex}
                        className={`flex justify-center`}
                        style={{ marginTop: rowIndex === 0 ? '0' : '-1rem' }}
                    >
                        {hexagonData.slice(
                            itemsPerRow.slice(0, rowIndex).reduce((a, b) => a + b, 0),
                            itemsPerRow.slice(0, rowIndex + 1).reduce((a, b) => a + b, 0)
                        ).map((hex) => (
                            <Hexagon key={hex.id} text={''} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BgHexagonBottom;
