export default function ComponentFooter() {
  return (
    <footer>
      <script src="https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js"></script>
      <coingecko-coin-price-marquee-widget
        coin-ids="bitcoin,ethereum, cardano,monero, eos,ripple,litecoin"
        currency="usd"
        background-color="#ffffff"
        locale="en"
      ></coingecko-coin-price-marquee-widget>
    </footer>
  );
}
