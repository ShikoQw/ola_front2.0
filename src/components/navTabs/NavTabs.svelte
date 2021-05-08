<script>
    import HomePage from "../HomePage.svelte";
    import MyCourses from "../navTabs/MyCourses.svelte";
    import Adaptation from "../navTabs/Adaptation.svelte";
    import Market from "../navTabs/Market.svelte";
    import Profile from "../navTabs/Profile.svelte";

    import Tabs from "../navTabs/Tabs.svelte";

    let items = [
        { label: "Home",
            value: 1,
            component: HomePage
        },
        { label: "My courses",
            value: 2,
            component: MyCourses
        },
        { label: "Adaptation",
            value: 3,
            component: Adaptation
        },
        { label: "Market",
            value: 4,
            component: Market
        },
        { label: "Profile",
            value: 5,
            component: Profile
        }
    ];
</script>

<Tabs {items}/>
