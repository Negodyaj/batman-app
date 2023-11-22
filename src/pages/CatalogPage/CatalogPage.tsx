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
      <p>CatalogPage works!</p>
      <h1>Clicks count: {props.clicksCount}</h1>
      <button onClick={handleButtonCLick}>CatalogPage Press me</button>
    </section>
  );
}
