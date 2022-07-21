import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { movieService } from "../../../services/movieService";
import MovieTabItem from "./MovieTabItem";
const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

export default function MovieTabs() {
  const [dataRaw, setDataRaw] = useState([]);
  useEffect(() => {
    movieService
      .getMovieByTheater()
      .then((res) => {
        setDataRaw(res.data.content);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);
  let renderContent = () => {
    return dataRaw.map((heThongRap, index) => {
      return (
        <TabPane
          tab={<img src={heThongRap.logo} className="w-10 h-10" />}
          key={index}
        >
          <Tabs style={{ height: 500 }} tabPosition="left" defaultActiveKey="1">
            {heThongRap.lstCumRap.map((cumRap, index) => {
              return (
                <TabPane
                  tab={
                    <div className="w-48 whitespace-normal text-left">
                      <p>{cumRap.tenCumRap}</p>
                      <p>{cumRap.diaChi}</p>
                    </div>
                  }
                  key={index}
                >
                  <div
                    style={{
                      height: 500,
                      overflowY: "scroll",
                    }}
                  >
                    {cumRap.danhSachPhim.map((phim, index) => {
                      if (index < 20) {
                        {
                          return <MovieTabItem key={index} movie={phim} />;
                        }
                      }
                    })}
                  </div>
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };
  return (
    <Tabs tabPosition="left" defaultActiveKey="1" onChange={onChange}>
      {renderContent()}
    </Tabs>
  );
}
