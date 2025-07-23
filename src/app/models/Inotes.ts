interface INote
{
    id:string;
    titre:string;
    contenu:string | listeCheck[];
    couleur:string;
    archiver:boolean;
    epingler:boolean;
    rappelleDate:Date;
    dateCreation:Date;
    colaborateur:string[];
    
    
}

interface listeCheck {
    contenu:string;
    cheker: boolean;
}