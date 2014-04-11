function getMyth02AtmaAreaByRealHour( eHour )
{
    if( eHour >= 12 ) eHour -= 12;
    switch( eHour )
    {
    case 0:
        return 7;
        break;
    case 1:
        return 9;
        break;
    case 2:
        return 11;
        break;
    case 3:
        return 2;
        break;
    case 4:
        return 1;
        break;
    case 5:
        return 5;
        break;
    case 6:
        return 4;
        break;
    case 7:
        return 6;
        break;
    case 8:
        return 8;
        break;
    case 9:
        return 3;
        break;
    case 10:
        return 12;
        break;
    case 11:
        return 10;
        break;
    default:
        return -1;
        break;
    }
}
