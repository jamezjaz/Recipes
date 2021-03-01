import React from 'react';
import recipeImg from '../assets/recipeImg.jpg';

const FoodDetails = () => (
  <div className="container-fluid">
    <h2>Food Details</h2>
    <div>
      <table className="table" style={{ width: '100%' }}>
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Category</th>
            <th scope="col">Area</th>
            <th scope="col">Instructions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Bakewell tart</th>
            <td>
              <img src={recipeImg} className="w-100 rounded" alt="foodImg" />
            </td>
            <td>Dessert</td>
            <td>British</td>
            <td>
              &quot;To make the pastry, measure the flour into a
              bowl and rub in the butter with your fingertips
              until the mixture resembles fine breadcrumbs.
              Add the water, mixing to form a soft dough. Roll
              out the dough on a lightly floured work surface
              and use to line a 20cm/8in flan tin. Leave in the
              fridge to chill for 30 minutes. Preheat the oven to
              200C/400F/Gas 6 (180C fan). Line the pastry case with
              foil and fill with baking beans. Bake blind for about
              15 minutes, then remove the beans and foil and cook
              for a further five minutes to dry out the base. For
              the filing, spread the base of the flan generously
              with raspberry jam. Melt the butter in a pan, take
              off the heat and then stir in the sugar. Add ground
              almonds, egg and almond extract. Pour into the flan
              tin and sprinkle over the flaked almonds. Bake for
              about 35 minutes. If the almonds seem to be browning
              too quickly, cover the tart loosely with foil to
              prevent them burning.&quot;
            </td>
          </tr>
          <tr>
            <th scope="row">Beef Wellington</th>
            <td>
              <img src={recipeImg} className="w-100 rounded" alt="foodImg" />
            </td>
            <td>Beef</td>
            <td>Nigerian</td>
            <td>
              &quot;Put the mushrooms into a food processor with some seasoning and
              pulse to a rough paste. Scrape the paste into a pan and cook over
              a high heat for about 10 mins, tossing frequently, to cook out the
              moisture from the mushrooms. Spread out on a plate to cool. Heat
              in a frying pan and add a little olive oil. Season the beef and
              sear in the hot pan for 30 secs only on each side. (You don&quot;t want
              to cook it at this stage, just colour it). Remove the beef from the
              pan and leave to cool, then brush all over with the mustard. Lay a
              sheet of cling film on a work surface and arrange the Parma ham slices
              on it, in slightly overlapping rows. With a palette knife, spread the
              mushroom paste over the ham, then place the seared beef fillet in the
              middle. Keeping a tight hold of the cling film from the edge, neatly
              roll the Parma ham and mushrooms around the beef to form a tight barrel
              shape. Twist the ends of the cling film to secure. Chill for 15-20 mins
              to allow the beef to set and keep its shape. Roll out the puff pastry on
              a floured surface to a large rectangle, the thickness of a £1 coin. Remove
              the cling film from the beef, then lay in the centre. Brush the surrounding
              pastry with egg yolk. Fold the ends over, the wrap the pastry around the beef,
              cutting off any excess. Turn over, so the seam is underneath, and place on a
              baking sheet. Brush over all the pastry with egg and chill for about 15 mins
              to let the pastry rest. Heat the oven to 200C, 400F, gas 6. Lightly score the
              pastry at 1cm intervals and glaze again with beaten egg yolk. Bake for 20 minutes,
              then lower the oven setting to 180C, 350F, gas 4 and cook for another 15 mins.
              Allow to rest for 10-15 mins before slicing and serving with the side dishes of
              your choice. The beef should still be pink in the centre when you serve it.&quot;
            </td>
          </tr>
          <tr>
            <th scope="row">Name</th>
            <td>
              <img src={recipeImg} className="w-100 rounded" alt="foodImg" />
            </td>
            <td>Chicken</td>
            <td>Mexican</td>
            <td>&quot;Wash and boil&quot;</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default FoodDetails;
