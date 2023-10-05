---
author: Jan Carlo Hendriks
date: "2019-07-09T16:04:44.000Z"
# hero_image: /me.png
title: Prototype For Adidas Sporty Tryouts
---

In this document, I will present and handover the prototype for my test plan for demonstrating the conversion rate of my concept, the Adidas Sporty Tryouts. This concept involves embedding a short video game on the Adidas e-commerce website, allowing customers to virtually try out different clothing items in various scenarios with their selected Adidas virtual ambassador. This interactive and engaging experience offers users rewards after finishing a game, aiming to increase engagement and satisfaction. Each clothing section is paired with specific game scenarios, such as football, basketball, or tennis.

Before proceeding with production, it is imperative to validate the commercial potential of this concept by showcasing its conversion rate. Assessing the application's conversion rate is a critical initial step before committing to any definitive investment and moving forward with execution. This evaluation serves the dual purpose of confirming the idea's viability and, more importantly, mitigating potential financial risks associated with any definitive investment and execution.

To evaluate the conversion rates for Adidas Sporty Tryouts, I have chosen to conduct an A/B test, following consideration of alternative methods like preference tests and surveys, which focus on user preferences and emotional responses to design. The A/B test stands out because it provides tangible, quantifiable performance metrics based on actual user interactions.

To execute this test, a direct comparison needs to be performed between the current Adidas website and the one featuring the virtual tryout feature. This approach involves dividing website visitors into two groups: the test group, which gains access to the virtual tryout feature, and the control group, which does not. This division allows for an objective assessment of the two groups' performance and an accurate determination of the impact of the virtual tryout feature on conversion rates.

As outlined in my Conversion Test Plan for Adidas Sporty Tryouts, I suggest a one-month test duration. It's crucial to sync this timeframe with Adidas' product-development cycles to prevent any interference from concurrent changes. Additionally, I recommend using Optimizely for the test since it's already familiar to Adidas and provides robust developer documentation.

To confirm the virtual tryout feature's impact on conversion, the conditions are an increased sales compared to the current version and higher user interaction with the virtual wardrobe before making a purchase, in comparison to users who didn't use this feature.

## Research strategy

<table>
  <tr>
   <td><strong>Main question</strong>
   </td>
   <td>How does it look like?</td>
  </tr>
  <tr>
   <td><strong>Sub Questions</strong>
   </td>
   <td>
<ul>

<li>How could the application look and feel?</li>
<li>Which features should we implement and which can be improved?</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Methods</strong>
   </td>
   <td>
<ul>

<li>Prototype</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Link to document</strong>
   </td>
   <td>
	 <a href="../docs/prototype-for-adidas-sporty-tryouts.pdf" target="_blank">Prototype For Adidas Sporty Tryouts</a>
   </td>
  </tr>
</table>

## Conclusion

I've supplied the code and documentation necessary to conduct the A/B test for integrating the new virtual wardrobe feature into the Adidas website. This contribution will assist GroupM in effectively measuring the conversion rates of Adidas Sporty Tryouts.

Regarding the technology choice, I've selected Next.js due to its compatibility with the current Adidas website, which is built on React. Next.js extends React's capabilities, serving as a comprehensive web development framework capable of managing both front-end and back-end components. This choice streamlines the handling of files like 3D objects and holograms. In addition, the adaptability of React components across different frameworks enhances the overall versatility of this solution.

## Recommendation

The next crucial step is the integration of this prototype into the Adidas website. The development team will need to tailor the React code to meet their specific requirements, although my prototype lays a solid foundation that is easily adaptable to incorporate new assets. However, it's important to note that the assets I've provided are of low quality and should not be used in a production environment.

Furthermore, it's imperative that any changes made to the actual Adidas website align with this prototype to ensure a seamless A/B test that isn't influenced by external factors, such as concurrent product changes.

In terms of running the A/B test, I assessed several tools and determined that Optimizely, which Adidas already uses, is an effective choice. The development team can seamlessly integrate this new prototype into their Optimizely environment to initiate the A/B test.

Before commencing the A/B test, the development team should establish a specific test period. As outlined in my test plan, a one-month duration strikes a balance between being long enough to capture sufficient baseline user data and conversion events, and short enough to make a timely impact on business decisions. However, it's crucial that this test period aligns with the product-development cycles of the Adidas team. This synchronisation is vital to avoid any unintended influence from additional changes made beyond those introduced during the virtual tryout cycle, ensuring that the conclusions drawn are not confounded by other variables.
