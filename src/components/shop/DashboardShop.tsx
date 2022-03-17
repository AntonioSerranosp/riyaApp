import { Layout, Menu, Row, Select } from "antd";
import { CardProduct } from "../products/CardProduct";
import "./DashboardShop.less";

const { Content, Footer, Sider, Header } = Layout;
const { SubMenu } = Menu;
const { Option } = Select;
const fakeData = [
  {
    name: "Primer producto",
    id: "1",
    price: 900,
    category: "jawelry",
    description: "description",
    src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    name: "Segundo  producto",
    id: "2",
    price: 900,
    category: "jawelry",
    description: "description",
    src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    name: "Algo  producto",
    id: "3",
    price: 900,
    category: "wear",
    description: "description",
    src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    name: "Algo  producto",
    id: "4",
    price: 900,
    category: "wear",
    description: "description",
    src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    name: "Algo lindo",
    id: "5",
    price: 900,
    category: "handicrafts",
    description: "description",
    src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    name: "Algo manual",
    id: "6",
    price: 900,
    category: "handicrafts",
    description: "description",
    src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    name: "Accesorio",
    id: "7",
    price: 900,
    category: "accessories",
    description: "description",
    src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    name: "Accesorio2",
    id: "8",
    price: 900,
    category: "accessories",
    description: "description",
    src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
];
export const DashboardShop = () => {
  function onChange(value: any) {
    console.log(`selected ${value}`);
  }

  function onSearch(val: any) {
    console.log("search:", val);
  }

  return (
    <div className="dashboardShop-wrapper">
      <div className="sider-layout-shop">
        <div className="title">Buscar productos</div>
        <Select
          showSearch
          placeholder="Buscar producto"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          style={{ width: "100%" }}
          // filterOption={(input, option) => {
          //   console.log({ input, option }, "option filter");
          //   return (
          //     option?.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
          //   );
          // }}
        >
          <Option value="jack" key="1">
            Jack
          </Option>
          <Option value="lucy" key="2">
            Lucy
          </Option>
          <Option value="tom" key="3">
            Tom
          </Option>
        </Select>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
        >
          <SubMenu
            key="sub1"
            title={<h2 className="submenu-title-shop">Categorias</h2>}
          >
            <Menu.Item key="todos" className="all-products-submenu-item">
              Todos
            </Menu.Item>
            <Menu.Item key="4">Joyería</Menu.Item>
            <Menu.Item key="2">Ropa</Menu.Item>
            <Menu.Item key="3">Accesorios</Menu.Item>
            <Menu.Item key="1">Artesanias</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
      <Row>
        {fakeData.map((fakeProduct) => {
          const { name, id, price, category, description, src } = fakeProduct;
          return (
            <CardProduct
              name={name}
              price={price}
              category={category}
              description={description}
              src={src}
              key={id}
            />
          );
        })}
      </Row>
    </div>
  );
};
