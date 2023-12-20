import React, { useState, useEffect } from "react";
import Modal from 'react-modal';
import Header from '../components/Header';
import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";
import { StyledCard } from '../components/Card';
import { StyledButton } from '../components/Button';

interface Data {
  title: string,
  description: string,
  ingredients: string[],
  image: string,
  id: number
}

function Products() {
  const [data, setData] = useState<Data[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Data | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then(response => response.json())
      .then(res => setData(res));
  }, []);

  const openModal = (product: Data) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <NavbarComponent />
      <Header title='Our Products'/>
      <div style={{ padding: '0px 112px' }}>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: 'wrap', gap: 10, marginTop: '40px', marginBottom: '40px' }}>
          {data.length > 0 ? (
            data.map((item: Data) => (
              <StyledCard key={item.id}>
                <center>
                  <img alt="Product Image" src={item.image} width={'100%'} />
                </center>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3>{item.title}</h3>
                  <StyledButton type="secondary" onClick={() => openModal(item)}>Detail</StyledButton>
                </div>
                <p>{item.description.substring(0, 40)} ...</p>
              </StyledCard>
            ))
          ) : (
            <p>Loading....</p>
          )}
        </div>
      </div>

      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Product Details"
      >
        {selectedProduct && (
          <>
            <h2>{selectedProduct.title}</h2>
            <div style={{display: 'flex', gap: 20, marginBottom: '20px' }}>
                <img alt="Product Image" src={selectedProduct.image} width={'300px'} />
                <div>
                    <h3>Deskripsi</h3>
                    <p>{selectedProduct.description}</p>
                    <h3>Komposisi</h3>
                    <ul>
                      
                      {selectedProduct.ingredients.map((item: string) => (
                      <li key={item}>{item}</li>
                      ))}
                    </ul>
                </div>
            </div>
            <StyledButton type="secondary" onClick={closeModal}>Close</StyledButton>
          </>
        )}
      </Modal>

      <FooterComponent />
    </>
  );
}

export default Products;
