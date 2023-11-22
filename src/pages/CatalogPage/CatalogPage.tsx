import "./CatalogPage.scss";

type CatalogPageProps = {
  clicksCount: number;
};

export function CatalogPage(props: CatalogPageProps) {
  function handleButtonCLick() {
    alert("CatalogPage clicked");
  }

  return (
    <section className="catalog-page">
      <div className="products-grid">
        item 1 <br />
        item 2 <br />
        item 3
      </div>
      <h1>Clicks count: {props.clicksCount}</h1>
      <button onClick={handleButtonCLick}>CatalogPage Press me</button>
    </section>
  );
}
