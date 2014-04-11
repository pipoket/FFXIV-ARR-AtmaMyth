function getAtmaAreaByDate( eMonth, eDay )
{
    switch( eMonth )
    {
        case 1:
            if( eDay <= 20 )
                return 1;
            else
                return 2;
            break;
        case 2:
            if( eDay <= 19 )
                return 2;
            else
                return 3;
            break;
        case 3:
            if( eDay <= 20 )
                return 3;
            else
                return 4;
            break;
        case 4:
            if( eDay <= 20 )
                return 4;
            else
                return 5;
            break;
        case 5:
            if( eDay <= 21 )
                return 5;
            else
                return 6;
            break;
        case 6:
            if( eDay <= 21 )
                return 6;
            else
                return 7;
            break;
        case 7:
            if( eDay <= 23 )
                return 7;
            else
                return 8;
            break;
        case 8:
            if( eDay <= 23 )
                return 8;
            else
                return 9;
            break;
        case 9:
            if( eDay <= 23 )
                return 9;
            else
                return 10;
        case 10:
            if( eDay <= 23 )
                return 10;
            else
                return 11;
            break;
        case 11:
            if( eDay <= 22 )
                return 11;
            else
                return 12;
            break;
        case 12:
            if( eDay <= 22 )
                return 12;
            else
                return 1;
        default:
            return -1;
            break;
    }
}


function getAtmaAreaByHour( eHour )
{
    if( eHour <= 3 )
        return [1, 2];
    else if( eHour <= 7 )
        return [3, 4];
    else if( eHour <= 11 )
        return [5, 6];
    else if( eHour <= 15)
        return [7, 8];
    else if( eHour <= 19 )
        return [9, 10];
    else
        return [11, 12];
}
