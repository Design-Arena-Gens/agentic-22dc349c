const lastUpdated = "April 10, 2025";

export default function Home() {
  const recipes = [
    {
      title: "Classic Sunshine Lemon Meringue Pie",
      description:
        "Buttery pâte brisée, tart lemon curd, and a billowy torched meringue make this the nostalgic showstopper.",
      prepTime: "30 mins",
      cookTime: "25 mins",
      totalTime: "3 hrs (includes chilling)",
      yield: "9-inch pie (8 servings)",
      ingredients: [
        {
          section: "Crust",
          items: [
            "1 1/4 cups all-purpose flour",
            "2 tbsp granulated sugar",
            "1/2 tsp fine sea salt",
            "8 tbsp cold unsalted butter, cubed",
            "4-5 tbsp ice water",
          ],
        },
        {
          section: "Lemon Filling",
          items: [
            "1 1/4 cups granulated sugar",
            "1/4 cup cornstarch",
            "1/4 tsp fine sea salt",
            "1 1/2 cups water",
            "3 large egg yolks",
            "1 tbsp lemon zest",
            "1/2 cup freshly squeezed lemon juice",
            "2 tbsp unsalted butter",
          ],
        },
        {
          section: "Swiss Meringue",
          items: [
            "3 large egg whites",
            "3/4 cup granulated sugar",
            "1/4 tsp cream of tartar",
            "1 tsp pure vanilla extract",
          ],
        },
      ],
      steps: [
        "Pulse flour, sugar, and salt in a food processor. Cut in butter until pea-sized. Add ice water a tablespoon at a time until dough holds together. Chill 1 hour.",
        "Roll dough to a 12-inch round, line a 9-inch pie plate, crimp edges, and freeze 10 minutes. Blind bake at 400°F with pie weights for 18 minutes, remove weights, and bake 5 minutes more. Cool completely.",
        "Whisk sugar, cornstarch, and salt in a saucepan. Add water and cook over medium heat until thick and translucent. Temper in yolks, return to heat, stir in zest, juice, and butter until glossy. Pour into crust.",
        "Make Swiss meringue: Whisk whites, sugar, and cream of tartar over a simmering bain-marie until 165°F. Transfer to mixer, whip to stiff peaks, then beat in vanilla.",
        "Spread meringue over warm filling, creating peaks. Torch or broil until toasted. Cool 1 hour, then chill 2 hours to set before slicing.",
      ],
      extraTip:
        "Keep the filling hot when you add the meringue—the steam helps prevent weeping.",
    },
    {
      title: "Silky Lemon Chiffon Icebox Pie",
      description:
        "A no-bake, airy lemon chiffon filling set in a graham cracker crust for effortless elegance.",
      prepTime: "25 mins",
      cookTime: "10 mins (stovetop)",
      totalTime: "6 hrs (includes chilling)",
      yield: "9-inch pie (10 servings)",
      ingredients: [
        {
          section: "Graham Crust",
          items: [
            "1 1/2 cups graham cracker crumbs",
            "1/3 cup granulated sugar",
            "1/2 tsp fine sea salt",
            "6 tbsp unsalted butter, melted",
          ],
        },
        {
          section: "Chiffon Filling",
          items: [
            "3 large eggs, separated",
            "1 cup granulated sugar, divided",
            "2 tbsp lemon zest",
            "1/2 cup freshly squeezed lemon juice",
            "1 envelope (7g) powdered gelatin",
            "1/4 cup cold water",
            "1 1/2 cups heavy cream",
            "1 tsp pure vanilla extract",
          ],
        },
      ],
      steps: [
        "Stir crumbs, sugar, salt, and butter. Press firmly into a 9-inch pie plate. Bake at 350°F for 10 minutes. Cool completely.",
        "Bloom gelatin in cold water for 5 minutes. Meanwhile, whisk yolks, 1/2 cup sugar, zest, and juice in a saucepan. Cook over medium-low heat, stirring constantly, until thickened and 170°F. Remove from heat, stir in gelatin until dissolved. Cool to room temperature.",
        "Whip cream with vanilla to soft peaks. In a separate bowl, whip egg whites to soft peaks, then slowly shower in remaining 1/2 cup sugar until glossy.",
        "Fold whipped cream into lemon base, then gently fold in meringue. Pour into crust, smooth top, and chill at least 4 hours.",
        "Serve topped with additional whipped cream and candied lemon slices, if desired.",
      ],
      extraTip:
        "To prevent a soggy base, ensure the crust is fully cooled before adding the airy filling.",
    },
    {
      title: "Meyer Lemon Olive Oil Tart",
      description:
        "Rustic-meets-modern with a delicate almond crust and fragrant Meyer lemon custard finished with flaky salt.",
      prepTime: "20 mins",
      cookTime: "35 mins",
      totalTime: "2 hrs",
      yield: "10-inch tart (8 servings)",
      ingredients: [
        {
          section: "Almond Crust",
          items: [
            "1 cup all-purpose flour",
            "1/3 cup finely ground almonds",
            "1/4 cup confectioners' sugar",
            "1/4 tsp fine sea salt",
            "6 tbsp unsalted butter, softened",
            "1 large egg yolk",
          ],
        },
        {
          section: "Custard Filling",
          items: [
            "4 large eggs",
            "3/4 cup granulated sugar",
            "2 tbsp Meyer lemon zest",
            "2/3 cup Meyer lemon juice",
            "1/4 cup fruity extra-virgin olive oil",
            "Pinch of flaky sea salt",
          ],
        },
      ],
      steps: [
        "Beat butter and sugar until creamy. Mix in flour, almonds, and salt until sandy. Add yolk and gently mix just until the dough comes together.",
        "Press dough evenly into a 10-inch tart pan with removable bottom. Freeze 15 minutes. Bake at 375°F for 18-20 minutes until golden. Cool slightly.",
        "Whisk eggs, sugar, zest, and juice until smooth. Stream in olive oil while whisking to emulsify.",
        "Pour filling into warm crust. Bake at 325°F for 18-20 minutes until just set with a slight wobble.",
        "Cool on rack, sprinkle with flaky salt, and serve at room temperature or chilled.",
      ],
      extraTip:
        "Use freshly milled almond flour for a tender crust that still holds a clean slice.",
    },
    {
      title: "Toasted Coconut Lemon Cream Pie",
      description:
        "A tropical twist with toasted coconut macadamia crust, silky lemon pastry cream, and coconut whipped cream.",
      prepTime: "35 mins",
      cookTime: "25 mins",
      totalTime: "5 hrs (includes chilling)",
      yield: "9-inch pie (8 servings)",
      ingredients: [
        {
          section: "Coconut-Macadamia Crust",
          items: [
            "1 cup sweetened shredded coconut, toasted",
            "1 cup vanilla wafer crumbs",
            "1/3 cup finely chopped macadamia nuts",
            "1/4 cup granulated sugar",
            "6 tbsp unsalted butter, melted",
          ],
        },
        {
          section: "Lemon Cream Filling",
          items: [
            "2 cups whole milk",
            "1/2 cup granulated sugar",
            "1/4 cup cornstarch",
            "Pinch of fine sea salt",
            "4 large egg yolks",
            "2 tbsp lemon zest",
            "1/2 cup fresh lemon juice",
            "3 tbsp unsalted butter",
          ],
        },
        {
          section: "Coconut Whipped Cream",
          items: [
            "1 1/4 cups heavy cream",
            "3 tbsp confectioners' sugar",
            "1/2 tsp coconut extract",
            "1/4 cup toasted coconut flakes, for garnish",
          ],
        },
      ],
      steps: [
        "Combine crust ingredients, press into a 9-inch pie plate, and bake at 350°F for 12 minutes. Cool completely.",
        "In a saucepan, whisk sugar, cornstarch, and salt. Gradually add milk and cook over medium heat until thick. Temper yolks with hot mixture, return to pan, cook 2 minutes, then stir in zest, juice, and butter until smooth.",
        "Press pastry cream through a sieve into crust to remove zest strands. Cover with plastic wrap directly on surface and chill 4 hours.",
        "Whip cream with sugar and coconut extract to medium peaks. Mound over chilled pie, garnish with toasted coconut, and serve.",
      ],
      extraTip:
        "Straining the pastry cream removes zest bits for a velvety finish while keeping all the flavor.",
    },
    {
      title: "Lemon Mascarpone Shortbread Tartlets",
      description:
        "Individual tartlets with a crisp shortbread shell, lush mascarpone-lemon filling, and brûléed sugar top.",
      prepTime: "40 mins",
      cookTime: "15 mins",
      totalTime: "2 hrs 30 mins",
      yield: "6 (4-inch) tartlets",
      ingredients: [
        {
          section: "Shortbread Shells",
          items: [
            "1 cup all-purpose flour",
            "1/3 cup confectioners' sugar",
            "1/4 tsp fine sea salt",
            "1/2 cup unsalted butter, melted",
            "1 tsp pure vanilla extract",
          ],
        },
        {
          section: "Mascarpone Filling",
          items: [
            "8 oz mascarpone cheese, softened",
            "4 oz cream cheese, softened",
            "1/2 cup granulated sugar",
            "2 tbsp lemon zest",
            "1/4 cup fresh lemon juice",
            "1/2 cup cold heavy cream",
          ],
        },
        {
          section: "Finish",
          items: [
            "6 tsp granulated sugar for brûlée topping",
            "Fresh berries and mint, optional",
          ],
        },
      ],
      steps: [
        "Stir flour, sugar, and salt. Add butter and vanilla, mix until dough forms. Press into six 4-inch tartlet pans. Dock and freeze 15 minutes.",
        "Bake at 350°F for 14-16 minutes until lightly golden. Cool completely and unmold.",
        "Beat mascarpone, cream cheese, sugar, zest, and juice until smooth. In a separate bowl whip cream to soft peaks, then fold into mascarpone mixture.",
        "Pipe or spoon filling into shells. Chill 1 hour to set.",
        "Sprinkle 1 tsp sugar over each tartlet and torch until caramelized. Garnish with berries and mint.",
      ],
      extraTip:
        "Keep mascarpone cold while mixing to preserve its body and prevent a runny filling.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-white text-slate-900">
      <header className="border-b border-yellow-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-12 text-center md:px-10">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-600">
            Lemon Lovers Collection
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            The 5 Lemon Pie Recipes You&apos;ll Bake on Repeat
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Zest-forward classics, modern tartlets, and icebox wonders curated
            for reliable bake-off level results. Each recipe balances bright
            citrus with the right amount of sweetness and texture.
          </p>
        </div>
      </header>

      <main className="mx-auto grid max-w-5xl gap-10 px-6 py-12 md:grid-cols-2 md:px-10 lg:gap-12">
        {recipes.map((recipe) => (
          <article
            key={recipe.title}
            className="flex flex-col rounded-3xl border border-yellow-100 bg-white shadow-lg shadow-yellow-100/30 transition hover:-translate-y-1 hover:shadow-yellow-200/60"
          >
            <div className="flex flex-col gap-3 border-b border-yellow-100 bg-gradient-to-br from-yellow-100/60 to-white px-6 py-8">
              <h2 className="text-2xl font-semibold text-slate-900">
                {recipe.title}
              </h2>
              <p className="text-base text-slate-600">{recipe.description}</p>
              <dl className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
                <div>
                  <dt className="uppercase tracking-wide text-[0.7rem] text-yellow-700">
                    Prep
                  </dt>
                  <dd>{recipe.prepTime}</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-wide text-[0.7rem] text-yellow-700">
                    Cook
                  </dt>
                  <dd>{recipe.cookTime}</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-wide text-[0.7rem] text-yellow-700">
                    Total
                  </dt>
                  <dd>{recipe.totalTime}</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-wide text-[0.7rem] text-yellow-700">
                    Yield
                  </dt>
                  <dd>{recipe.yield}</dd>
                </div>
              </dl>
            </div>

            <div className="flex flex-1 flex-col gap-8 px-6 py-8">
              <section>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-700">
                  Ingredients
                </h3>
                <div className="mt-4 space-y-4">
                  {recipe.ingredients.map((group) => (
                    <div key={group.section} className="space-y-2">
                      <h4 className="text-base font-semibold text-slate-800">
                        {group.section}
                      </h4>
                      <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600">
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-700">
                  Method
                </h3>
                <ol className="mt-4 grid gap-3 text-sm text-slate-600">
                  {recipe.steps.map((step, index) => (
                    <li
                      key={step}
                      className="flex gap-3 rounded-2xl border border-yellow-100 bg-yellow-50/40 px-4 py-3"
                    >
                      <span className="mt-[2px] flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500 text-xs font-semibold text-white">
                        {index + 1}
                      </span>
                      <p className="leading-relaxed">{step}</p>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="rounded-2xl border border-dashed border-yellow-200 bg-yellow-50/80 px-5 py-4 text-sm text-yellow-900">
                <h3 className="font-semibold uppercase tracking-[0.2em] text-yellow-700">
                  Baker&apos;s Note
                </h3>
                <p className="mt-2 leading-relaxed">{recipe.extraTip}</p>
              </section>
            </div>
          </article>
        ))}
      </main>

      <footer className="border-t border-yellow-100 bg-white/80">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 py-10 text-center text-sm text-slate-500 md:px-10">
          <p>
            Baked, tested, and curated for citrus enthusiasts. Keep zesting and
            share your slice with{" "}
            <span className="font-semibold text-yellow-600">
              #LemonPieLegends
            </span>
            .
          </p>
          <p>Updated {lastUpdated}</p>
        </div>
      </footer>
    </div>
  );
}
