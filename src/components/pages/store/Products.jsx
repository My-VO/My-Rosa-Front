import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

const API = process.env.REACT_APP_API;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(`${API}/items/`);

      setProducts(result.data);
      setLoading(false);
    };
    fetchItems();
  }, []);

  if (loading) {
    return 'Chargement...';
  }

  return (
    <>
      <div className="collection">
        <div className="collection__sidebar">
          <div className="collection__sidebar__option">
            <h3 className="collection__sidebar__option-title">
              ROSIERS PAR VARIÉTÉ
            </h3>
            <ul className="collection__sidebar__option-content">
              <li>
                <input type="checkbox" />
                <a href="" className="selected">
                  <span></span>
                  <span>Rosiers anglais</span>
                  <span>{products.length}</span>
                </a>
              </li>
              <li>
                <input type="checkbox" />
                <a href="">
                  <span></span>
                  <span>Rosiers arbustif</span>
                  <span>{products.length}</span>
                </a>
              </li>
              <li>
                <input type="checkbox" />
                <a href="">
                  <span></span>
                  <span>Rosiers grimpants</span>
                  <span>{products.length}</span>
                </a>
              </li>
              <li>
                <input type="checkbox" />
                <a href="">
                  <span></span>
                  <span>Rosiers liances</span>
                  <span>{products.length}</span>
                </a>
              </li>
              <li>
                <input type="checkbox" />
                <a href="">
                  <span></span>
                  <span>Rosiers anciens</span>
                  <span>{products.length}</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="collection__sidebar__option">
            <h3 className="collection__sidebar__option-title">
              ROSIERS PAR PARFUM
            </h3>
            <ul className="collection__sidebar__option-content">
              <li>
                <input type="checkbox" />
                <a href="">
                  <span></span>
                  <span>Non parfumée</span>
                  <span>{products.length}</span>
                </a>
              </li>
              <li>
                <input type="checkbox" />
                <a href="">
                  <span></span>
                  <span>Parfumée</span>
                  <span>{products.length}</span>
                </a>
              </li>
              <li>
                <input type="checkbox" />
                <a href="">
                  <span></span>
                  <span>Très parfumée</span>
                  <span>{products.length}</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="collection__sidebar__option">
            <h3 className="collection__sidebar__option-title">
              HAUTEUR À MATURITÉ
            </h3>
            <ul className="collection__sidebar__option-content">
              <li>
                <input type="checkbox" />
                <a href="">
                  <span></span>
                  <span>30 cm - 60 cm</span>
                  <span>{products.length}</span>
                </a>
              </li>
              <li>
                <input type="checkbox" />
                <a href="">
                  <span></span>
                  <span>60 cm - 90 cm</span>
                  <span>{products.length}</span>
                </a>
              </li>
              <li>
                <input type="checkbox" />
                <a href="">
                  <span></span>
                  <span>90 cm - 1.2 m</span>
                  <span>{products.length}</span>
                </a>
              </li>
              <li>
                <input type="checkbox" />
                <a href="">
                  <span></span>
                  <span>1.2 m - 1.5 m</span>
                  <span>{products.length}</span>
                </a>
              </li>
              <li>
                <input type="checkbox" />
                <a href="">
                  <span></span>
                  <span>1.5 m - 3 m</span>
                  <span>{products.length}</span>
                </a>
              </li>
              <li>
                <input type="checkbox" />
                <a href="">
                  <span></span>
                  <span>3 m - 12 m</span>
                  <span>{products.length}</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="collection__sidebar__option">
            <h3 className="collection__sidebar__option-title">
              FLEUR DE COULEUR
            </h3>
            <ul className="collection__sidebar__option-content">
              <li>
                <input type="checkbox" />
                <a href="">
                  <span></span>
                  <span>Blanche</span>
                  <span>{products.length}</span>
                </a>
              </li>
              <li>
                <input type="checkbox" />
                <a href="">
                  <span></span>
                  <span>Rouge</span>
                  <span>{products.length}</span>
                </a>
              </li>
              <li>
                <input type="checkbox" />
                <a href="">
                  <span></span>
                  <span>Orange</span>
                  <span>{products.length}</span>
                </a>
              </li>
              <li>
                <input type="checkbox" />
                <a href="">
                  <span></span>
                  <span>Jaune</span>
                  <span>{products.length}</span>
                </a>
              </li>
              <li>
                <input type="checkbox" />
                <a href="">
                  <span></span>
                  <span>Rose</span>
                  <span>{products.length}</span>
                </a>
              </li>
              <li>
                <input type="checkbox" />
                <a href="">
                  <span></span>
                  <span>Multicolore</span>
                  <span>{products.length}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="collection__main">
          <div className="collection__main__filter-bar">
            <div className="collection__main__filter-bar--sorting">
              <p>TRIER PAR : </p>
              <select id="collectionSort" name="collectionSort">
                <option value="best-selling">Populaires</option>
                <option value="manual">Meilleures notes</option>
                <option value="price-descending">
                  Prix: du moins cher au plus cher
                </option>
                <option value="price-descending">
                  Prix: du plus cher au moins cher
                </option>
                <option value="title-ascending">A-Z</option>
                <option value="title-descending">Z-A</option>
              </select>
            </div>
            <p id="résultats">{products.length} résultats</p>
            <div className="collection__main__filter-bar--pagination">
              <p>Pagination</p>
            </div>
          </div>
          <div className="collection__main__filter-bar--mobile">
            <div>
              <div className="collection__main__filter-bar--sorting">
                <select id="collectionSort" name="collectionSort">
                  <option value="best-selling">Populaires</option>
                  <option value="manual">Meilleures notes</option>
                  <option value="price-descending">
                    Prix: du moins cher au plus cher
                  </option>
                  <option value="price-descending">
                    Prix: du plus cher au moins cher
                  </option>
                  <option value="title-ascending">A-Z</option>
                  <option value="title-descending">Z-A</option>
                </select>
              </div>
            </div>
            <div>AFFINER PAR</div>
            <p id="résultats">{products.length} résultats</p>
          </div>
          <div className="collection__main__products">
            {products.map((product) => (
              <div
                className="collection__main__products__product"
                key={product.itemId}
              >
                <Link
                  to={`/items/${product.name}`}
                  style={{ textDecoration: 'none' }}
                >
                  <img
                    className="collection__main__products__product__img"
                    src={product.PicturesItems[0].picture}
                    alt={product.name}
                  />
                  <h3>{product.name.toUpperCase()}</h3>
                  <p>{product.variety}</p>
                  <div className="collection__main__products__product__flex">
                    <p>{product.stockQuantity} en stock</p>
                    <p>{parseFloat(product.price).toFixed(2)} €</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
