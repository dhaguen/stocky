import { useState, useEffect } from 'react';
import { db } from '../firebase'; // Import your Firestore instance

import { collection, query, limit, getDocs } from "firebase/firestore";

import { COLLECTION_NAME } from '../constants';

function ProductCard({ product }) {

  const handleImageError = (event) => {
    // Handle image loading error
    const errorMessage = 'Error loading image: ' + event.target.src;
    console.log(errorMessage);
    // Display the error message to the user
    // You can update the UI state to show an error message or use a notification component
  };

  return (

    <div className="css-ProductCard-component">
      <div className="css-pnc6ci">
        <div className="css-product-card">
          <div className="css-cpsonv">
            <div className="css-tkc8ar">
              <img width="140px"  height="75" src={product.media.thumbUrl} alt={product.name} 
              onError={handleImageError} className="css-kpfxlo" />
            </div>
          </div>
          <div className="css-cp13gg">
            <p className="chakra-text css-3lpefb">{product.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    const q = query(collection(db, COLLECTION_NAME), limit(40));

    const fetchDoc = async () => {
      try {
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          console.log("the document exists");

          let queryData = [];

          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());

            queryData.push(doc.data());
          });

          setProducts(queryData);
        }
        else {
          console.log(`no document return in the collection ${COLLECTION_NAME} for the query :`);
          console.log(querySnapshot.query);
        }
      }
      catch (error) {
        console.error('Error:', error);
      }
    }
    fetchDoc();

  }, []);

  return (
    <div className="css-grid-component">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;