export enum Routes{

    //COME BACK BUTTON 
    GO_BACK_FROM_SCREEN_WIZARDS,
    GO_BACK_FROM_SCREEN_OBJECTS,
    GO_BACK_FROM_SCREEN_CREATURES,
    GO_BACK_FROM_SCREEN_MORTIFAGOS,

    //CATEGORIES
    WIZARDS = 'wizards',
    OBJECTS = 'objects',
    CREATURES = 'creatures',
    VILLIANS = 'villians',
    
    //Those values should be equals to the routing in app.module

    //HOME CATEGORIES AND DESCRIPTION CATEGORIES
    WIZARDS_CATEGORIES = "wiz-cat",
    OBJECTS_CATEGORIES = 'obj-cat',
    CREATURES_CATEGORIES = 'cre-cat',
    MORTIFAGOS_CATEGORIES = 'mor-cat',

    //CREATURES CATEGORIES
    DANGER_CREATURES = 'danger',
    NO_DANGER_CREATURES ='no-danger',

    //WIZARDS CATEGORIES
    TEACHERS = 'teachers',
    MORTIFAGOS = 'mortifagos',
    ANIMALS_FANTASTICS = 'ani-fantastics',
    OTHERS_WIZ = 'others',
    STUDENTS = 'students',

    //OBJECTS CATEGORIES
    WANDERS = 'wanders',
    HOROCRUXES = 'horocruxes',
    RELIQUES = 'reliques',
    OTHER_OBJECTS = 'others-objects',
    QUIDDICH = 'quiddich',

    //DESCRIPTION ROUTES
    WANDER_DESC = '/desc-wan/',
    HOROCRUXES_DESC = '/desc-hor/',
    RELIQUES_DESC = '/desc-rel/',
    OTHER_OBJECTS_DESC = '/desc-oth/',
    QUIDDICH_DESC = '/desc-qui/'
}
