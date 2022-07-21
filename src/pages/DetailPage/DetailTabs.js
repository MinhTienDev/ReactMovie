import { Tabs } from "antd";
import { useEffect, useState } from "react";
import DetailTabItem from "./DetailTabItem";
const { TabPane } = Tabs;

const DetailTabs = ({ movie }) => {
  const [dataRap, setDataRap] = useState([]);

  const heightTab = 400;

  useEffect(() => {
    console.log(movie.heThongRapChieu);
    setDataRap(movie.heThongRapChieu);
  }, [movie]);

  let renderTabContent = () => {
    return (
      dataRap &&
      dataRap.map((heThongRap, iHeThongRap) => {
        return (
          <TabPane
            tab={<img src={heThongRap.logo} className="w-10 h-10" />}
            key={iHeThongRap}
          >
            <div
              className="pr-5"
              style={{ overflowY: "scroll", height: heightTab }}
            >
              {heThongRap.cumRapChieu.map((cumRap, iCumRap) => {
                return (
                  <div
                    key={iCumRap}
                    className="border-b-slate-200 py-5 border-b-2 pr-3"
                  >
                    <div className=" text-left pl-0 whitespace-nowrap text-ellipsis">
                      <p className=" text-green-600">{cumRap.tenCumRap}</p>
                      <p className=" text-gray-400">{cumRap.diaChi}</p>
                    </div>
                    <div>
                      {cumRap.lichChieuPhim.map((movie, iMovie) => {
                        if (iMovie < 10) {
                          return <DetailTabItem movie={movie} key={iMovie} />;
                        }
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </TabPane>
        );
      })
    );
  };

  return (
    <>
      <Tabs tabPosition="left">{renderTabContent()}</Tabs>
    </>
  );
};

export default DetailTabs;
