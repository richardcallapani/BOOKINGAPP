import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Editar</div>
            <h1 className="title">Información</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">GRUPO 2 BOOKING</h1>
                <h1 className="itemTitle">INTEGRANTES:</h1>
                <div className="detailItem">
                  <span className="itemKey">Edgar Richard Callapani Condori</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Iván felix Montesinos Ccallo</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Paolo Rodrigo Rodriguez Paredes</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Elvis Yonny Miranda Rodríguez</span>
                </div>
                <div className="detailItem">
                 <h2> <span className="itemKey">Ing° de Sistemas - UTP</span> </h2>
                </div>
                <div className="detailItem">
                  <span className="itemKey">AREQUIPA - 2022</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Últimas transacciones</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;
