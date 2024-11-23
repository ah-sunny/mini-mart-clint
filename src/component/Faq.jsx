

const Faq = () => {
  return (
    <div>

      <div className="text-center mx-auto mb-12 w-full md:w-full lg:w-[50%]">
        <h1 className="font-bold text-xl lg:text-3xl  mb-3" >Frequently Asked Questions</h1>
        <p>Have questions about your shopping experience?
          We have got you covered with clear answers.
          Explore details on orders, shipping, and returns.
          Your satisfaction is our top priority!</p>
      </div>

      {/*  */}
      <div className=" w-full md:w-[80%] lg:w-[60%] mx-auto space-y-1">
        {/* faq-1 */}
        <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-200 border">
          <div className="collapse-title text-xl font-medium">1. What payment methods do you accept?</div>
          <div className="collapse-content">
            <p>We accept all major credit and debit cards, as well as digital wallets like PayPal and Google Pay. For a full list of payment options, check out our checkout page.</p>
          </div>
        </div>
        {/* faq-1 */}
        <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-200 border">
          <div className="collapse-title text-xl font-medium">2. How long does shipping take?</div>
          <div className="collapse-content">
            <p>Shipping typically takes 5-7 business days within the country. International delivery times may vary depending on your location. You’ll receive a tracking number as soon as your order is shipped.</p>
          </div>
        </div>
        {/* faq-1 */}
        <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-200 border">
          <div className="collapse-title text-xl font-medium">3. What is your return policy?</div>
          <div className="collapse-content">
            <p>We offer a 30-day return policy for unused and undamaged items in their original packaging. Simply contact our customer service team to initiate the return process.</p>
          </div>
        </div>
        {/* faq-1 */}
        <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-200 border">
          <div className="collapse-title text-xl font-medium">Do you offer discounts or promotions?</div>
          <div className="collapse-content">
            <p>Yes! We regularly offer special discounts and promotions. Sign up for our newsletter to stay updated on the latest deals or visit our <span className="font-bold">Deals</span> section on the website.</p>
          </div>
        </div>
        {/* faq-1 */}
        <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-200 border">
          <div className="collapse-title text-xl font-medium">5. How can I contact customer support?</div>
          <div className="collapse-content">
            <p>You can reach us through our contact form on the website, email us at <span className="text-sky-600">support@minimart.com</span>, or call our support team during business hours. We are here to help!</p>
          </div>
        </div>

      </div>


    </div>
  );
};

export default Faq;