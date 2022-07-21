import React from "react";

export default function Footer() {
  return (
    <div className=" max-h-max " style={{ backgroundColor: "#212121" }}>
      <div
        className="h-full m-auto pt-8 md:w-3/4 sm:w-full "
        style={{ maxWidth: 1200 }}
      >
        <table
          className="table-auto w-full border-b-2 border-slate-400 "
          style={{}}
        >
          <thead>
            <tr className="text-start text-gray-400">
              <th>TIX</th>
              <th>ĐỐI TÁC</th>
              <th>MOBILE APP</th>
              <th>SOCIAL</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="align-top">
                <div className="grid py-8 lg:pl-8 pl-2 lg:grid-cols-2 pr-2 text-sm grid-cols-1">
                  <p className="hover:text-white text-gray-400 transition duration-300 cursor-pointer">
                    FAQ
                  </p>
                  <p className="hover:text-white text-gray-400 transition duration-300 cursor-pointer">
                    Thỏa thuận sử dụng
                  </p>
                  <p className="hover:text-white text-gray-400 transition duration-300 cursor-pointer">
                    Brand Guidelines
                  </p>
                  <p className="hover:text-white text-gray-400 transition duration-300 cursor-pointer">
                    Chính sách bảo mật
                  </p>
                </div>
              </td>
              <td className="align-top">
                <div className="grid md:grid-cols-3 py-8 grid-cols-2 justify-items-center">
                  <div
                    className="h-10 w-10 small_wh   rounded-full  mb-4"
                    style={{
                      backgroundImage:
                        "url(data:image/png;base64,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)",
                      backgroundSize: "cover",
                    }}
                  >
                    <a
                      href="https://www.cgv.vn/"
                      className="hover:text-white cursor-pointer h-full w-full inline-block"
                      style={{
                        color: "#9e9e9e",
                      }}
                    ></a>
                  </div>
                  <div
                    className="h-10 w-10 small_wh   rounded-full  mb-4"
                    style={{
                      backgroundImage:
                        "url(https://www.bhdstar.vn/wp-content/uploads/2019/06/BHDStar_Logo_Tron.png)",
                      backgroundSize: "cover",
                    }}
                  >
                    <a
                      href="https://www.bhdstar.vn/"
                      className="hover:text-white cursor-pointer h-full w-full inline-block"
                      style={{
                        color: "#9e9e9e",
                      }}
                    ></a>
                  </div>
                  <div
                    className="h-10 w-10 small_wh   rounded-full  mb-4"
                    style={{
                      backgroundImage:
                        "url(data:image/png;base64,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)",
                      backgroundSize: "cover",
                    }}
                  >
                    <a
                      href="https://www.galaxycine.vn/"
                      className="hover:text-white cursor-pointer h-full w-full inline-block"
                      style={{
                        color: "#9e9e9e",
                      }}
                    ></a>
                  </div>
                  <div
                    className="h-10 w-10 small_wh   rounded-full  mb-4"
                    style={{
                      backgroundImage:
                        "url(https://tenpack.com.vn/wp-content/uploads/2016/02/cinestar-logo.png)",
                      backgroundSize: "cover",
                    }}
                  >
                    <a
                      href="http://cinestar.com.vn/"
                      className="hover:text-white cursor-pointer h-full w-full inline-block"
                      style={{
                        color: "#9e9e9e",
                      }}
                    ></a>
                  </div>
                  <div
                    className="h-10 w-10 small_wh   rounded-full  mb-4"
                    style={{
                      backgroundImage:
                        "url(https://cdn.nhanlucnganhluat.vn/uploads/images/D69545BE/logo/2019-04/pictures_library_6235_20180102135750_4563.jpg)",
                      backgroundSize: "cover",
                    }}
                  >
                    <a
                      href="https://lottecinemavn.com"
                      className="hover:text-white cursor-pointer h-full w-full inline-block"
                      style={{
                        color: "#9e9e9e",
                      }}
                    ></a>
                  </div>
                  <div
                    className="h-10 w-10 small_wh   rounded-full  mb-4"
                    style={{
                      backgroundImage:
                        "url(https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.18169-9/11738012_638376569630533_4842848653150639340_n.png?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=a-gnlfDai58AX-r43PL&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT9eA5au6SF2LT-6hXHxjojf3pbneuUQkScsvU_75lUq2Q&oe=62DAD212)",
                      backgroundSize: "cover",
                    }}
                  >
                    <a
                      href="https://www.megagscinemas.vn/"
                      className="hover:text-white cursor-pointer h-full w-full inline-block"
                      style={{
                        color: "#9e9e9e",
                      }}
                    ></a>
                  </div>
                  <div
                    className="h-10 w-10 small_wh   rounded-full  mb-4 bg-white"
                    style={{
                      backgroundImage:
                        "url(https://truyenthongvang.vn/uploads/public/2021/06/03/1622682588188_zalopay.png)",
                      backgroundSize: "cover",
                    }}
                  >
                    <a
                      href="https://zalopay.vn/"
                      className="hover:text-white cursor-pointer h-full w-full inline-block"
                      style={{
                        color: "#9e9e9e",
                      }}
                    ></a>
                  </div>
                  <div
                    className="h-10 w-10 small_wh   rounded-full  mb-4"
                    style={{
                      backgroundImage:
                        "url(https://www.inlogo.vn/vnt_upload/File/Image/logo_VCB_828891.jpg)",
                      backgroundSize: "cover",
                      backgroundPosition: " -5px 0",
                    }}
                  >
                    <a
                      href="https://www.vietcombank.com.vn/"
                      className="hover:text-white cursor-pointer h-full w-full inline-block"
                      style={{
                        color: "#9e9e9e",
                      }}
                    ></a>
                  </div>
                  <div
                    className="h-10 w-10 small_wh   rounded-full  mb-4"
                    style={{
                      backgroundImage:
                        "url(data:image/png;base64,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)",
                      backgroundSize: "cover",
                      backgroundPosition: " -5px 0",
                    }}
                  >
                    <a
                      href="https://webv3.123go.vn/"
                      className="hover:text-white cursor-pointer h-full w-full inline-block"
                      style={{
                        color: "#9e9e9e",
                      }}
                    ></a>
                  </div>
                </div>
              </td>
              <td className="align-top">
                <div className="grid grid-cols-1 py-8 justify-items-center">
                  <div
                    className="h-10 w-10 small_wh mb-4 rounded-full"
                    style={{
                      backgroundImage:
                        "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABaCAMAAADHGlvmAAAAgVBMVEUAAACVlZWnp6eWlpaVlZWhoaGVlZWWlpaXl5ebm5uUlJSVlZWenp6VlZWVlZWVlZWWlpaXl5eZmZmVlZWUlJSVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWXl5eVlZWVlZWVlZWWlpaVlZWUlJSVlZWUlJSWlpaWlpaVlZWYmJiUlJT4ZcJDAAAAKnRSTlMA+AVP8guOKx0Q7qkT472zZTIX586hiYFfx6WcRifc1nk9697Rl2pVciP1WFzxAAACV0lEQVRYw62Y6ZKqMBCFEzbZkUVARBgdt+n3f8BbtxxtenApOXx/U36VmNOdBPU5Ruusc99TOK7j038WsCk8arqSoqqzTze2mMk4EhNCKjsmxsdmNVRRDLlWNOQLUS3Zg0bCtYRqrQAaEtSAKpWqzphvWiZSOlqokvk2Mc8QVzBU6Z1CiIYqE6tEYqxWQfyw6oD2wMV9fZUB9+Xf5Tnu59NYOkGSrL5a+9Zu1lEfO6ZxHVwVvtb7PnHO77LRNlzFOl56spTKTpb4SYwLjGVEEt3c0+SdChphlU9sbUcP6KpUKdtsND1kXz9K0ZGeoXN6QWCPNutAUykyqVpENJ0+FNHeE8J6sEyvJ4wNuxIC4TtBjZr05abKfFD1zbeeI6g6ZJwsDaoGiXAwVe6yythjrp1iTExVyssQQm7LAwvhNFRtIZUlpnWG65CpIJcpXAHkCoVrjagiJeigHihdFuJKpAsq7GBGVzyjq5AuH4q9dH0TgitcBeSqhSshdCPn6tBaFNEFcsmHZIu5xIeKkDA2eI9mTLiBMdZCPMIwoh/48GDyFK4iRi85rTjJ7zp3NAN643EqYK4Py3IWl8vvQ5ReXYmJQYvcxFU6+3UZeMRWcB0xXJTwxBLF1KArne84aliEFpLlKsEGzhbj5ZNVB4M1YGB1qkYc4RUydg/fwZiFNUHliz3EEms+8EzsipV6SjC5PYwxPpMFhnolG+W/KM2tZ3vbs9ON36FvOFnE+OVWMelKE5Of1Vuy+y/i+u8awsutoewr+5WEbbXTbCozfDxoXqrqtBv/U/8AtXW2fqhv80sAAAAASUVORK5CYII=)",
                      backgroundSize: "cover",
                      backgroundPosition: " center center ",
                    }}
                  >
                    <a
                      href="https://www.apple.com/vn/app-store/"
                      className="hover:text-white cursor-pointer h-full w-full inline-block"
                      style={{
                        color: "#9e9e9e",
                      }}
                    ></a>
                  </div>
                  <div
                    className="h-10 w-10 small_wh   rounded-full "
                    style={{
                      backgroundImage:
                        "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABXCAMAAAB7hEg4AAAAe1BMVEUAAACVlZWXl5eWlpaUlJSUlJSUlJSWlpaVlZWVlZWVlZWWlpaUlJSjo6OVlZWVlZWfn5+WlpaVlZWXl5eVlZWVlZWVlZWUlJSXl5eenp6VlZWtra2VlZWVlZWVlZWVlZWZmZmbm5uVlZWVlZWVlZWVlZWWlpaVlZWUlJTu8U1AAAAAKHRSTlMA51MY6UO6WiTD+JatBYDcDDvJNfHToJEuE4gI4ox4ayAQtqZ9ckhgkElVywAAAgxJREFUWMPt2NmSojAYhuHfaVAIKqtsCojrd/9XOB0DZtol8ls9B13NcySWvpVoQmnoR1m0ZNAuOK1UOPRUjJLTCuE+H/NKOMSRoaEnDjgQS7BJtvRQLlYL4jlhp6Lx7FB6XlnP4uAywwgxcaU4U1hF0ERU5nRERWyFlfi4sxL+mp1a1wkeshr2x7XBU6uQtexLmIiasSCmeGE+dJ5thJd262ETdDHAfFDLw0VS1o/WxLES6tFyQOoPlFAuMdzw1/oF9oCN2C0jeTHHDU9+BlBeb8slOtvPd91N0pWbG53m1XK/Tiuy4z3uePnJv06YzM5gOJlbUzDszVMUYLCMrRgsgak1A8uHqXUEi2Nq1d/YOk9YtvRfbSs3SkN6k52587rt7wwCUiYf8r9HD9JEDcURUBp+S3/zVqF+H/SXC35Lb5Tq600q57f0RnG/bmeb39IbZfKNLWtsja2xNbbG1u9p7dAL+S0bvZX6m94RLb9VoJfKlq2v+C3a60lJaTfI9p1W4UO6njM0n9dJFrz3OyfINhDRia4K+exbLalY0D1+q/OTWuz/HSY+GFwyCgUGS3Iyi10MtHPopcCRIvQy52KP3tSRAhqsG54+PPBujybG1tgaWyY79I7qiRK9lNtaohfe3nIbbusjgRKpa32wZgW8kj4d2Gypk1uQkpD48r0l/Kr4Z6jZRkxSw1nJX+vMF/qKdZ1sAAAAAElFTkSuQmCC)",
                      backgroundSize: "cover",
                      backgroundPosition: " 2px center",
                      backgroundColor: "#212121",
                    }}
                  >
                    <a
                      href="https://play.google.com/"
                      className="hover:text-white cursor-pointer h-full w-full inline-block"
                      style={{
                        color: "#9e9e9e",
                      }}
                    ></a>
                  </div>
                </div>
              </td>
              <td className="align-top">
                <div className="grid grid-cols-1 py-8  justify-items-center">
                  <div
                    className="h-10 w-10 small_wh  rounded-full mb-4"
                    style={{
                      backgroundImage:
                        "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAAflBMVEUAAACVlZWWlpaUlJSUlJSampqVlZWVlZWXl5eWlpaXl5ewsLCVlZWXl5eVlZWVlZWioqKUlJSVlZWVlZWVlZWXl5eenp6YmJiVlZWVlZWVlZWVlZWVlZWVlZWWlpaXl5eVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWWlpaUlJRq2G1aAAAAKXRSTlMAwXf4zxX8Y0OiIwTyHNy7Ce6mlHBQDynVheCd6o1qMl85ta99Vz7LSFONebAAAAKSSURBVFjD3dnX0towEIbhz2AJ415woxn4aXv/NxggM4EEw0qydZLn2Lyj0SJAAxSlIvL92vcjUQUYS7qf5G5IL5aHthQYKlokU+rVbPYwV80S+iZua8MFF1NiOVdoq+eSlLgnvbFWhSRlF41ND2Zr0iFXQnWTHdKVlVBRZmSgSPnNKMiM63NH70Cm1t+nKS5kLiy/DTCmIeTu85obGkZ+Wnfl0lBTD30Ch4YLO/TY0BjiCm9KGsfPW9kPaSQT/MNRmlJSTLbb7eIu//hQjb/MiBfvUqVXOHglMmJtAtXFzPBipbGFfDqrXmYoiZNDPU1HnUWHQiedVRqLXqEvzS+7IJanl85SPKQhsVK9NO3wsCNWjKdJs7zL6I55byfEujzLHqmQEW6EJJbzsmhSssDNiWykE9zMraSn98HHVtJ0BgTZSU+AM/NI5t68HMaZ+1vMf+hsmUfm6MNPvwFaw/SCmyMwN0xv+M+Gg2E6J4bAxTDtECNCY5bmj4OP2DA9tZauiE2zG5J4N92zGXkPO4W0a+mgUwTHVlrgx1a6QmErHWBiKb0GSkvpBKgtpTdAENpJnwAkdtIR86x5usFNbSW9wV1sI33GXWshvcRDbSHdMt9F5mnpM3doPs3fpt2x0x1z9TdPH/DUjJvu8OQZp/nraz5iOhPM/d88PWOugeZph/l5aJ5eR2/ptBkn7eFdHX45uNM/JH11RB9vSoOt0K+UNNBPgA9mNEwS4KOdHLTmFF9cQzJWMP+idGsyI4/giIRMrK9QMJEGAxRQ0rmkJ1xAVbDNdHZ5LqBBFMpH09lDk2hD4snDHgaqBbfn66KGqbqNP88uvwYYxN/my/ds0p4DjKHqyu1xs5rn81XRLk7nCP+vXxyyUrzi8kSkAAAAAElFTkSuQmCC)",
                      backgroundSize: "cover",
                      backgroundPosition: " 0 0",
                    }}
                  >
                    <a
                      href="https://www.facebook.com"
                      className="hover:text-white cursor-pointer h-full w-full inline-block"
                      style={{
                        color: "#9e9e9e",
                      }}
                    ></a>
                  </div>
                  <div
                    className="h-10 w-10 small_wh   rounded-full bg-white"
                    style={{
                      backgroundImage:
                        "url(data:image/png;base64,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)",
                      backgroundSize: "cover",
                      backgroundPosition: " 0 0",
                    }}
                  >
                    <a
                      href="https://zalo.me/pc"
                      className="hover:text-white cursor-pointer h-full w-full inline-block"
                      style={{
                        color: "#9e9e9e",
                      }}
                    ></a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="grid grid-cols-1 my-4 md:mt-10 lg:grid-cols-6">
          <div className=" col-span-1  flex items-center">
            <img
              src="data:image/jpeg;base64,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"
              className="w-32 mx-4 mb-3 md:mx-8 lg:ml-0 lg:m-4"
            />
          </div>
          <div className=" col-span-4 px-4 md:px-8" colSpan={2}>
            <p className="text-white">TIX-SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
            <p className="text-white text-sm md:text-base">
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam. Giấy chứng nhận đăng ký kinh doanh số:
              0101659783, đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020
              do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp. Số Điện Thoại
              (Hotline): 1900 545 436
            </p>
          </div>
          <div className="hidden lg:flex items-center col-span-1">
            <img src="https://jp-lifter.com/wp-content/uploads/2021/07/Logo-thong-bao-mau-xanh.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
