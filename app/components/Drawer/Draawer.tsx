import { useState } from "react";
import { Drawer, Button } from "@arco-design/web-react";
import { IconSort, IconClose, IconRight } from "@arco-design/web-react/icon";

function DrawerComponent() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button
        onClick={() => {
          setVisible(true);
        }}
        type="secondary"
        style={{ fontWeight: "bold" }}
      >
        <IconSort style={{ fontWeight: "bold" }} />
      </Button>
      <Drawer
        style={{}}
        width={400}
        title={<span className=""></span>}
        visible={visible}
        placement="left"
        closeIcon={
          <Button
            shape="circle"
            type="primary"
            size="large"
            style={{ marginTop: -14, background: "black" }}
          >
            <IconClose
              style={{
                color: "white",
                fontSize: 35,
                fontWeight: "bold",
                padding: 6,
              }}
            />
          </Button>
        }
        onOk={() => {
          setVisible(false);
        }}
        onCancel={() => {
          setVisible(false);
        }}
      >
        <div className="flex flex-col gap-5 pt-4 text-xl font-medium pl-4">
          <div className="flex items-center justify-between">
            <p>Men</p>
            <IconRight className="text-lg" />
          </div>
          <div className="flex items-center justify-between">
            <p>Women</p>
            <IconRight className="text-lg" />
          </div>
          <div className="flex items-center justify-between">
            <p>Jewelry</p>
            <IconRight className="text-lg" />
          </div>
          <div className="flex items-center justify-between">
            <p>Watches</p>
            <IconRight className="text-lg" />
          </div>
          <div className="flex items-center justify-between">
            <p>Shoes</p>
            <IconRight className="text-lg" />
          </div>
          <div className="flex items-center justify-between">
            <p>Electronics</p>
            <IconRight className="text-lg" />
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default DrawerComponent;
