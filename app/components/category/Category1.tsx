"use client";

import {
  Button,
  Card,
  ConfigProvider,
  Rate,
  Tag,
  Modal,
  Typography,
} from "@arco-design/web-react";
import React, { useEffect, useState } from "react";
import enUS from "@arco-design/web-react/es/locale/en-US";
import Image from "next/image";
import { IconCheckCircleFill } from "@arco-design/web-react/icon";
const { Title, Paragraph } = Typography;

interface Item {
  id: number;
  title: string;
  price: number;
  addNumber?: number;
  image: string;
  category: string;
  description: string;
}

const Category1: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [addedItems, setAddedItems] = useState<Item[]>([]);
  const [isAdded, setIsAdded] = useState<boolean>(false); // State for managing item addition/removal
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Item | null>(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  function addItem(item: Item) {
    item.addNumber = 1;
    setAddedItems([...addedItems, item]);
  }

  function removeItem(item: Item) {
    const newItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
    setAddedItems(newItems);
  }

  function openModal(item: Item) {
    setSelectedProduct(item);
    setModalVisible(true);
  }

  // Function to handle closing modal
  function closeModal() {
    setModalVisible(false);
  }

  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <ConfigProvider locale={enUS}>
      <div className="container py-4 mb-8">
        <div className="flex items-center w-full h-14 text-white bg-orange-500 mb-4 pl-4 rounded-md">
          <h1 className="text-4xl xl:text-4xl font-bold max-md:text-2xl ">
            Men Collection
          </h1>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div key={item.id}>
              <Card
                style={{
                  backgroundColor: "var(--color-fill-2)",
                  borderRadius: "20px",
                }}
                bordered={false}
              >
                <Card
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "20px",
                    marginBottom: "15px",
                    cursor: "grab",
                  }}
                  // Open modal when clicking on the card
                  onClick={() => openModal(item)}
                  bordered={false}
                >
                  <Image
                    src={item.image}
                    alt="men's clothing"
                    className=" w-full h-32 mb-4"
                    height={50}
                    width={200}
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.category}</h2>
                    <Rate readonly defaultValue={5} />
                    <p>
                      <Tag icon={<IconCheckCircleFill />}>Yes</Tag>Pay on
                      delivery
                    </p>
                  </div>
                </Card>
                <div className="flex justify-between items-center">
                  <span className="text-black text-xl font-medium">
                    <small>Price: $</small>
                    {item.price}
                  </span>
                  <button
                    className={`px-4 py-2 rounded-md ${
                      addedItems.some((addedItem) => addedItem.id === item.id)
                        ? "bg-red-500 text-white"
                        : "bg-green-500 text-white"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card click event from firing
                      addedItems.some((addedItem) => addedItem.id === item.id)
                        ? removeItem(item)
                        : addItem(item);
                    }}
                  >
                    {addedItems.some((addedItem) => addedItem.id === item.id)
                      ? "REMOVE"
                      : "ADD"}
                  </button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Modal
        title="Product Details"
        visible={modalVisible}
        onCancel={closeModal}
        footer={null}
        style={{ width: "90%" }}
        className="max-h-screen"
      >
        {selectedProduct && (
          <div className="w-[100%] max-sm:flex-col max-h-fit flex gap-16">
            <Card className="w-[40%]">
              <Image
                src={selectedProduct.image}
                alt="men's clothing"
                className=" w-[400px] h-[350px] mb-4"
                height={50}
                width={200}
              />
            </Card>
            <div className="w-[60%]">
              <Title heading={2}>{selectedProduct.title}</Title>
              {/* <h2 className="text-3xl font-semibold">
                
              </h2> */}
              <Paragraph style={{ fontSize: "18px" }}>
                {selectedProduct.description}
              </Paragraph>
              <h1 className="text-2xl font-bold">$ {selectedProduct.price}</h1>

              {selectedProduct && (
                <div className="flex items-center justify-between gap-4 mt-4">
                  <div className="flex items-center gap-4 mt-4">
                    <p>Quantity:</p>
                    <div>
                      <Button
                        onClick={decreaseCount}
                        style={{ fontSize: "20px", marginRight: 8 }}
                        disabled={count === 0}
                      >
                        -
                      </Button>
                      <span> {count} </span>
                      <Button
                        onClick={increaseCount}
                        style={{ fontSize: "18px", marginLeft: 8 }}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <button
                    className={`px-4 py-2 rounded-md ${
                      addedItems.some(
                        (addedItem) => addedItem.id === selectedProduct.id
                      )
                        ? "bg-red-500 text-white"
                        : "bg-green-500 text-white"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card click event from firing
                      addedItems.some(
                        (addedItem) => addedItem.id === selectedProduct.id
                      )
                        ? removeItem(selectedProduct)
                        : addItem(selectedProduct);
                    }}
                  >
                    {addedItems.some(
                      (addedItem) => addedItem.id === selectedProduct.id
                    )
                      ? "REMOVE"
                      : "ADD"}
                  </button>
                </div>
              )}
              <div className="mt-10 w-[60%]">
                <Button type="primary" long>
                  BuyNow
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </ConfigProvider>
  );
};

export default Category1;
