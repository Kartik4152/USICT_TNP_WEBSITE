import styled from "styled-components";
import {
  AnimatedAxis,
  AnimatedGrid,
  AnimatedLineSeries,
  Tooltip,
  XYChart
} from "@visx/xychart";

const data = [
  {
    x: 2014,
    y: 120
  },
  {
    x: 2015,
    y: 150
  },
  {
    x: 2016,
    y: 180
  },
  {
    x: 2017,
    y: 220
  },
  {
    x: 2018,
    y: 250
  },
  {
    x: 2019,
    y: 360
  },
  {
    x: 2020,
    y: 430
  },
  {
    x: 2021,
    y: 580
  }
];

const tickLabelOffset = 10;

const accessors = {
  xAccessor: (d: {x:number, y:number}) => d.x,
  yAccessor: (d: {x:number, y:number}) => d.y
};

const LineChart = () => {
  return (
      <XYChart
        height={360}
        margin={{ left: 60, top: 60, bottom: 60, right: 60 }}
        xScale={{ type: "time" }}
        yScale={{ type: "linear" }}
      >
        <AnimatedGrid
          columns={false}
          numTicks={8}
          lineStyle={{
            stroke: "#e1e1e1",
            strokeLinecap: "round",
            strokeWidth: 1
          }}
          strokeDasharray="0, 4"
        />
        <AnimatedAxis
          hideAxisLine
          orientation="bottom"
          tickLabelProps={() => ({ dy: tickLabelOffset })}
          left={0}
          numTicks={8}
        />
        <AnimatedAxis
          hideAxisLine
          orientation="left"
          numTicks={8}
          tickLabelProps={() => ({ dx: -10 })}
        />

        <AnimatedLineSeries
          stroke="#003865"
          dataKey="primary_line"
          data={data}
          {...accessors}
        />
        <Tooltip
          showSeriesGlyphs
          glyphStyle={{
            fill: "#003865",
            strokeWidth: 0
          }}
          renderTooltip={({ tooltipData }) => {
            return (
              <TooltipContainer>
                  {Object.entries((tooltipData as any).datumByKey).map((lineDataArray) => {
                  const [key, value]=lineDataArray;
                  return (
                    <div className="row" key={key}>
                      <div className="date">
                          {(value as any).datum.x}
                      </div>
                      <div className="value"> 
                        <ColoredSquare color="#003865" />
                        Companies Visited: {(value as any).datum.y}
                      </div>
                    </div>
                  );
                })}
              </TooltipContainer>
            );
          }}
        />
      </XYChart>
  );
};

export default LineChart;

const ColoredSquare = styled.div`
  display: inline-block;
  width: 11px;
  height: 11px;
  margin-right: 8px;
  background: ${({ color }) => color};
  border-radius: 4px;
`;

const TooltipContainer = styled.div`
  padding: 8px 16px;
  font-size: 12px;
  border-radius: 4px;
  color: #222222;

  .date {
    font-size: 12px;
    margin-bottom: 8px;
    color: #222222;
    font-weight: 600;
  }
  .value {
    display: flex;
    align-items: center;
    font-weight: 400;
    color: #000000;
  }
`;
