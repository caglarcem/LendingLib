/*****************************************************************************/
/* Categories: Event Handlers */
/*****************************************************************************/
Template.Categories.events({
});

/*****************************************************************************/
/* Categories: Helpers */
/*****************************************************************************/
Template.Categories.helpers({
    lists: function(){
        return Lists.find({}, {sort: {Category:1}});
    }
});

/*****************************************************************************/
/* Categories: Lifecycle Hooks */
/*****************************************************************************/
Template.Categories.onCreated(function () {
});

Template.Categories.onRendered(function () {
});

Template.Categories.onDestroyed(function () {
});
